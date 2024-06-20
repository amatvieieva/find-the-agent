import { useDispatch, useSelector } from "react-redux";
import OptionElement from "../../components/OptionElement/OptionElement";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import ProgressLine from "../../components/ProgressLine/ProgressLine";
import Subtitle from "../../components/Subtitle/Subtitle";
import { optionsArr } from "./optionsArr";
import "./Price.scss";
import { selectPrice } from "../../redux/selectors";
import { priceRecord } from "../../redux/answers";
import { PriceType } from "../../redux/answers/interfaces";

export default function Price() {
  const prices = useSelector(selectPrice);
  const dispatch = useDispatch();

  function choosePrice(e: React.ChangeEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const data = Object.assign(Object.fromEntries(formData));
    dispatch(priceRecord(Object.keys(data)));
  }
  
  return (
    <PageWrapper>
      <div className="price__subtitleWrapper">
        <Subtitle>
          What price do you think your property will sell for?
        </Subtitle>
      </div>

      <form className="prise__options" onChange={(e: React.ChangeEvent<HTMLFormElement>) => choosePrice(e)}>
        {optionsArr.map((option, index) => (
          <OptionElement key={index} option={option} checked={prices.includes(option.title as PriceType)}></OptionElement>
        ))}
      </form>
      <div style={{ flexGrow: "1" }}></div>

      <ProgressLine pageNumber={3} btnDisabled={prices.length !== 0} nextPage="/focusAgent"></ProgressLine>
    </PageWrapper>
  );
}
