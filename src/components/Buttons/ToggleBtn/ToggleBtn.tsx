import { useState } from "react";
import "./ToggleBtn.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionRecorder } from "../../../redux/answers";
import { ActionType } from "../../../redux/answers/interfaces";
import { selectAction } from "../../../redux/selectors";
import { classNames } from "../../../utils/classNames";

export default function ToggleBtn() {
  const action = useSelector(selectAction);
  const [isBtnChecked, setIsBtnChecked] = useState(action === ActionType.Sell);
  const [isUserClick, setIsUserClick] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;
    setIsBtnChecked(isChecked);
    const btnValue = !isBtnChecked ? ActionType.Sell : ActionType.Rent;
    dispatch(actionRecorder(btnValue));
    setIsUserClick(true);
  }


  return (
    <div className="toggleBtn">
      <input
        type="checkbox"
        className="checkbox"
        name="toggleBtn"
        id="toggleBtn"
        onChange={(e) => handleChange(e)}
        checked={isBtnChecked}
      />
      <label className="checkboxLabel" htmlFor="toggleBtn">
        <div className="checkboxElementWrapper">
          <span
            className={classNames({
              "checkboxElement": true,
              "checkboxElement__checked--right": isBtnChecked,
              "checkboxElement__left--animation": isBtnChecked && isUserClick
            })}
          >
            Sell
          </span>
          <span
            className={classNames({
              "checkboxElement": true,
              "checkboxElement__checked--left": !isBtnChecked,
              "checkboxElement__right--animation": !isBtnChecked && isUserClick
            })}
          >
            Rent
          </span>
        </div>
      </label>
    </div>
  );
}
