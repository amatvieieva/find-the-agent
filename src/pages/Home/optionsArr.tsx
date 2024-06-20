import { Option } from "../../types/option";
import { Apartment, Bungalow, IconHouse, Landtobuild } from "../../assets/icons/IconsComponent";
import { PropertyType } from "../../redux/answers/interfaces";

export const optionsArr: Option[] = [
  {
    title: PropertyType.Apartment,
    svg: <Apartment />,
    value: PropertyType.Apartment,
  },
  {
    title: PropertyType.House,
    svg: <IconHouse />,
    value: PropertyType.House,
  },
  {
    title: PropertyType.Bungalow,
    svg: <Bungalow />,
    value: PropertyType.Bungalow,
  },
  {
    title: PropertyType.LandToBuild,
    svg: <Landtobuild />,
    value: PropertyType.LandToBuild,
  },
];
