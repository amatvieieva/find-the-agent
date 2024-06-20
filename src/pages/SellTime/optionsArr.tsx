import { Option } from "../../types/option";
import IconApartment from "../../assets/icons/apartment.svg?react";
import IconHouse from "../../assets/icons/Icon-house.svg?react";
import IconBungalow from "../../assets/icons/bungalow.svg?react";
import IconLandtobuild from "../../assets/icons/landtobuild.svg?react";
import { TimeType } from "../../redux/answers/interfaces";

export const optionsArr: Option[] = [
  {
    title: "Right away",
    svg: <IconApartment />,
    value: TimeType.RightAway
  },
  {
    title: "1-3 Months",
    svg: <IconHouse />,
    value: TimeType.OneToThreeMonths
  },
  {
    title: "4+ Months",
    svg: <IconBungalow />,
    value: TimeType.FourPlusMonths,
  },
  {
    title: "Already Listed",
    svg: <IconLandtobuild />,
    value: TimeType.AlreadyListed,
  },
];
