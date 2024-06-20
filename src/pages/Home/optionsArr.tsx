import { Option } from "../../types/option";
import IconApartment from "../../assets/icons/apartment.svg?react";
import IconHouse from "../../assets/icons/Icon-house.svg?react";
import IconBungalow from "../../assets/icons/bungalow.svg?react";
import IconLandtobuild from "../../assets/icons/landtobuild.svg?react";

export const optionsArr: Option[] = [
  {
    title: "Apartment",
    svg: <IconApartment />,
  },
  {
    title: "House",
    svg: <IconHouse />,
  },
  {
    title: "Bungalow",
    svg: <IconBungalow />,
  },
  {
    title: "Land to build",
    svg: <IconLandtobuild />,
  },
];
