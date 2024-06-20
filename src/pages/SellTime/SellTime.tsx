import { useDispatch, useSelector } from "react-redux";
import OptionElementLink from "../../components/OptionElement/OptionElementLink";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import ProgressLine from "../../components/ProgressLine/ProgressLine";
import Subtitle from "../../components/Subtitle/Subtitle";
import "./SellTime.scss";
import { optionsArr } from "./optionsArr";
import { timeRecorder } from "../../redux/answers";
import { TimeType } from "../../redux/answers/interfaces";
import { selectTime } from "../../redux/selectors";

export default function SellTime() {
  const dispatch = useDispatch();
  const selectedTime = useSelector(selectTime)

  function chooseTime ( time: TimeType) {
    dispatch(timeRecorder(time));
  }

  return (
    <PageWrapper>
      <div className="sellTime__subtitle--margin">
        <Subtitle>How fast are you planning to sell?</Subtitle>
      </div>
      <div className="sellTime__options">
        {optionsArr.map((option, index) => (
          <OptionElementLink
            to="/address"
            key={index}
            option={option}
            onClick = {()=>chooseTime(option.value as TimeType)}
            isSelected = {selectedTime === option.title}
          ></OptionElementLink>
        ))}
      </div>

      <div className="sellTime__progressLine--margin"></div>
      <ProgressLine pageNumber={1}></ProgressLine>
    </PageWrapper>
  );
}
