import { Link } from "react-router-dom";
import { Option } from "../../types/option";
import "./OptionElement.scss";
import   ButtonRight from "../../assets/icons/ButtonRight.svg?react";
interface OptionElementLinkProp {
  to: string;
  option: Option;
  onClick: () => void;
  isSelected: boolean;
}
export default function OptionElementLink({
  to,
  option,
  onClick,
  isSelected,
}: OptionElementLinkProp) {

  return (
    <Link to={to} className={`optionElement ${isSelected ? 'optionElement--checked' : ''}`} onClick ={onClick}>
      <div className="optionElement__svgBg">{option.svg}</div>
      <p className="optionElement__text">{option.title}</p>
      <ButtonRight />
    </Link>
  );
}
