import { useState } from "react";
import { Option } from "../../types/option";
import "./OptionElement.scss";

interface OptionElement {
  option: Option;
  checked: boolean;
}

export default function OptionElement({ option, checked }: OptionElement) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <label
      className={`optionElement ${isChecked ? 'optionElement--checked' : ''}`}
      htmlFor={option.title}
    >
      <input
        type="checkbox"
        id={option.title}
        className="optionElement__input"
        onChange={() => setIsChecked(!isChecked)}
        name={option.title}
        value={option.title}
        checked={isChecked}
      />
      <div className={`optionElement__svgBg ${isChecked ? 'optionElement__svgBg--checked' : ''}`}>{option.svg}</div>
      <p className="optionElement__text">{option.title}</p>
    </label>
  );
}
