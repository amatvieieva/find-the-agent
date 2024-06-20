import { useSelector } from "react-redux";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Subtitle from "../../components/Subtitle/Subtitle";
import { selectAnswers } from "../../redux/selectors";
import "./Result.scss";
import ProgressLine from "../../components/ProgressLine/ProgressLine";
import { propertyName } from "../../utils/propertyName";

export default function Result() {
  const answers = useSelector(selectAnswers);
  const answersArr = Object.entries(answers).slice(0, -1);

  return (
    <PageWrapper>
      <Subtitle>Data for agent search</Subtitle>
      <ul className="result__list">
        {answersArr.map(([name, value], index) => (
          <li key={index} className="result__item">
            <span className="result__propertyName">{propertyName(name)}: </span>
            {Array.isArray(value) ? value.join(", ") : String(value)}
          </li>
        ))}
      </ul>
      <div style={{ flexGrow: "1" }}></div>
      <ProgressLine pageNumber={5}></ProgressLine>
    </PageWrapper>
  );
}
