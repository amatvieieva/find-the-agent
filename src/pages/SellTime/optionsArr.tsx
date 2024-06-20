import { Option } from "../../types/option";
import { TimeType } from "../../redux/answers/interfaces";
import { AlreadyListed, FourMonth, Group13, RightAway } from "../../assets/icons/IconsComponent";

export const optionsArr: Option[] = [
  {
    title: "Right away",
    svg: <RightAway />,
    value: TimeType.RightAway
  },
  {
    title: "1-3 Months",
    svg: <Group13 />,
    value: TimeType.OneToThreeMonths
  },
  {
    title: "4+ Months",
    svg: <FourMonth />,
    value: TimeType.FourPlusMonths,
  },
  {
    title: "Already Listed",
    svg: <AlreadyListed />,
    value: TimeType.AlreadyListed,
  },
];
