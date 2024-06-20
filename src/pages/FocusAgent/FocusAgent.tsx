import OptionElement from "../../components/OptionElement/OptionElement";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Subtitle from "../../components/Subtitle/Subtitle";
import { optionsArr } from "./optionsArr";
import "./FocusAgent.scss";
import ProgressLine from "../../components/ProgressLine/ProgressLine";
import { useDispatch, useSelector } from "react-redux";
import { selectFocusAgent } from "../../redux/selectors";
import { FocusAgentType } from "../../redux/answers/interfaces";
import { focusAgentRecord } from "../../redux/answers";
import { useState } from "react";

export default function FocusAgent() {
  const [isUserChecked, setIsUserChecked] = useState(false);
  const focusAgentArr = useSelector(selectFocusAgent);
  const dispatch = useDispatch();

  function chooseFocusAgent(e: React.ChangeEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const data = Object.values(Object.fromEntries(formData));
    dispatch(focusAgentRecord(data));
  }

  return (
    <PageWrapper>
      <div className="focusAgent__subtitle--margin">
        <Subtitle>What should be the focus of the agent?</Subtitle>
      </div>
      <form className="focusAgent__form" onChange={chooseFocusAgent}>
        {optionsArr.map((option, index) => (
          <OptionElement
            key={index}
            option={option}
            checked={focusAgentArr.includes(option.title as FocusAgentType)}
          ></OptionElement>
        ))}
      </form>

      <input type="checkbox" id="inform" className="focusAgent__input" onChange={(e)=> setIsUserChecked(e.target.checked)}/>
      <label htmlFor="inform" className="focusAgent__label">
        Inform matching agents about my search
      </label>
      <div style={{ flexGrow: "1" }}></div>
      <ProgressLine pageNumber={4} nextPage="/result" btnDisabled={isUserChecked && focusAgentArr.length !== 0}></ProgressLine>
    </PageWrapper>
  );
}
