import { Option } from "../../types/option";
import "./OptionElement.scss";

interface OptionElement {
  option: Option;
  checked: boolean;
}

export default function OptionElement({ option, checked }: OptionElement) {
    
  return (
    <label
      className={`optionElement ${checked ? 'optionElement--checked' : ''}`}
      htmlFor={option.title}
    >
      <input
        type="radio"
        id={option.title}
        className="optionElement__input"
        name='radio'
        value={option.title}
        checked={checked}
      />
      <div className={`optionElement__svgBg ${checked ? 'optionElement__svgBg--checked' : ''}`}>{option.svg}</div>
      <p className="optionElement__text">{option.title}</p>
    </label>
  );
}
