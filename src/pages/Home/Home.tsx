import { useDispatch, useSelector } from "react-redux";
import NavigateButton from "../../components/Buttons/NavigatуButton/NavigateButton";
import ToggleBtn from "../../components/Buttons/ToggleBtn/ToggleBtn";
import OptionElement from "../../components/OptionElement/OptionElement";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Subtitle from "../../components/Subtitle/Subtitle";
import "./Home.scss";
import { optionsArr } from "./optionsArr";
import { typesRecorder } from "../../redux/answers";
import { selectTypes } from "../../redux/selectors";
import { PropertyType } from "../../redux/answers/interfaces";

export default function Home() {
  const propertyTypes = useSelector(selectTypes);
  const dispatch = useDispatch();

  function formPropertyTypes (e: React.ChangeEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const data = Object.values(Object.fromEntries(formData));        
    dispatch(typesRecorder(String(data)))
  }
  
  return (
    <PageWrapper>
      <h2 className="home__title">My property is for</h2>
      <ToggleBtn></ToggleBtn>
      <div className="home__subtitle--margin">
        <Subtitle>and ist this property type:</Subtitle>
      </div>
      <form className="home__options" onChange={(e: React.ChangeEvent<HTMLFormElement>)=>formPropertyTypes(e)}>
        {optionsArr.map((option, index) => (
          <OptionElement key={index} checked = {propertyTypes === option.title as PropertyType} option={option}></OptionElement>
        ))}
      </form>
      <div className="home__btn--margin">
        <NavigateButton to="/sellSpeed" isDisabled={!propertyTypes}>Let’s Continue</NavigateButton>
      </div>
    </PageWrapper>
  );
}
