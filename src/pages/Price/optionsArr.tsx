import { Option } from "../../types/option";
import IconAmount1 from "../../assets/icons/IconAmount1.svg?react";
import IconAmount2 from "../../assets/icons/IconAmount2.svg?react";
import IconAmount3 from "../../assets/icons/IconAmount3.svg?react";
import IconAmount4 from "../../assets/icons/IconAmount4.svg?react";
import IconAmount5 from "../../assets/icons/Group.svg?react";
import IconAmount6 from "../../assets/icons/Group 5.svg?react";
import { PriceType } from "../../redux/answers/interfaces";

export const optionsArr: Option[] = [
  {
    title: "€ 300K or less ",
    svg: <IconAmount1 />,
    value: PriceType.K300OrLess,
  },
  {
    title: "€ 301K – € 500K",
    svg: <IconAmount2 />,
    value: PriceType.K301to500,
  },
  {
    title: "€ 501K – € 600K",
    svg: <IconAmount3 />,
    value: PriceType.K501to600,
  },
  {
    title: "€ 601K – € 900K",
    svg: <IconAmount4 />,
    value: PriceType.K601to900,
  },
  {
    title: "€ 901K – € 1.2 M",
    svg: <IconAmount5 />,
    value: PriceType.K901to1M2,
  },
  {
    title: "€ 1.2 M or more",
    svg: <IconAmount6 />,
    value: PriceType.M1P2OrMore,
  },
];
