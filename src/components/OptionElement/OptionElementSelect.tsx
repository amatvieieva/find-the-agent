import { useEffect, useRef, useState } from "react";
import "./OptionElement.scss";
import { Loader } from "@googlemaps/js-api-loader";
import { useDispatch, useSelector } from "react-redux";
import { locationRecorder } from "../../redux/answers";
import { selectLocation } from "../../redux/selectors";
import { Location, LocationPinBig } from "../../assets/icons/IconsComponent";

const API_KEY = import.meta.env.VITE_API_KEY;
type SuggestionType = google.maps.places.AutocompletePrediction[];
interface OptionElementSelectProps {
  setIsValueEntered: (isValue: boolean) => void;
}

export default function OptionElementSelect({
  setIsValueEntered,
}: OptionElementSelectProps) {
  const location = useSelector(selectLocation);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState(location);
  const [suggestions, setSuggestions] = useState<SuggestionType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    debounce(fetchPlacePredictions, 1000);
    setIsValueEntered(inputValue.trim() !== "")
  }, [inputValue]);

  function fetchPlacePredictions () {   
    console.log(API_KEY);
    
    const loader = new Loader({
      apiKey: API_KEY,
      libraries: ["places"],
    });
  
    loader.load().then(() => {
      const delayDebounceFn = setTimeout(() => {
        if (inputValue) {
          const service = new window.google.maps.places.AutocompleteService();
          service.getPlacePredictions(
            { input: inputValue },
            (predictions, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
                setSuggestions(predictions.slice(0, 5));
                setIsLoading(false);
              } else {
                console.error("Error fetching place predictions:", status);
                setIsLoading(false);
              }
            }
          );
        } else {
          setSuggestions([]);
          setIsLoading(false);
        }
      }, 1000);
  
      return () => clearTimeout(delayDebounceFn);
    });
  }

  function debounce (callback: ()=>void, delay:number) {
    if (timeoutRef.current) {
     clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => callback(), delay); 
 }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsLoading(true);
  };

  function selectedItem(text: string) {
    setInputValue(text);
    dispatch(locationRecorder(text))
    setIsShowOptions(false);
  }

  return (
    <div style={{ position: "relative" }}>
      <input
        className="optionElementSelect"
        onFocus={() => setIsShowOptions(true)}
        placeholder="Property address"
        onChange={handleInputChange}
        value={inputValue}
      />
      <div className="optionElementSelect__icon">
        <LocationPinBig />
      </div>

      {isShowOptions && (
        <ul className="optionElementSelect__option">
          {isLoading && (
            <div className="optionElementSelect__loading">
              Loading
              <span className="optionElementSelect__loadingPoint"></span>
              <span className="optionElementSelect__loadingPoint"></span>
              <span className="optionElementSelect__loadingPoint"></span>
            </div>
          )}

          {!isLoading &&
            suggestions.length !== 0 &&
            suggestions.map((item, index) => (
              <li
                className="optionElementSelect__optionItem"
                key={index}
                onClick={() => selectedItem(item.description)}
              >
                <Location />
                <span className="optionElementSelect__city">
                  {item.structured_formatting.main_text}
                </span>
                <span className="optionElementSelect__country">
                  {item.structured_formatting.secondary_text}
                </span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
