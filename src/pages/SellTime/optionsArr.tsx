import { Option } from "../../types/option";
import { TimeType } from "../../redux/answers/interfaces";
import RightAway from '../../assets/icons/RightAway.svg?react';
import OneToThreeMonths from '../../assets/icons/1-3 month.svg?react';
import FourPlusMonths from '../../assets/icons/4month.svg?react';
import AlreadyListed from '../../assets/icons/AlreadyListed.svg?react';

export const optionsArr: Option[] = [
  {
    title: "Right away",
    svg: <RightAway />,
    value: TimeType.RightAway
  },
  {
    title: "1-3 Months",
    svg: <OneToThreeMonths />,
    value: TimeType.OneToThreeMonths
  },
  {
    title: "4+ Months",
    svg: <FourPlusMonths />,
    value: TimeType.FourPlusMonths,
  },
  {
    title: "Already Listed",
    svg: <AlreadyListed />,
    value: TimeType.AlreadyListed,
  },
];
