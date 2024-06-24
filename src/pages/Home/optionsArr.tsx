import { Option } from "../../types/option";
import Apartment from '../../assets/icons/Apartment.svg?react';
import House from '../../assets/icons/House.svg?react';
import Bungalow from '../../assets/icons/bungalow.svg?react';
import LandToBuild from '../../assets/icons/LandToBuild.svg?react';
import { PropertyType } from "../../redux/answers/interfaces";

export const optionsArr: Option[] = [
  {
    title: PropertyType.Apartment,
    svg: <Apartment />,
    value: PropertyType.Apartment,
  },
  {
    title: PropertyType.House,
    svg: <House />,
    value: PropertyType.House,
  },
  {
    title: PropertyType.Bungalow,
    svg: <Bungalow />,
    value: PropertyType.Bungalow,
  },
  {
    title: PropertyType.LandToBuild,
    svg: <LandToBuild />,
    value: PropertyType.LandToBuild,
  },
];
