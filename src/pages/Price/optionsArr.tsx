import { Option } from "../../types/option";
import { PriceType } from "../../redux/answers/interfaces";
import K300OrLess from '../../assets/icons/K300OrLess.svg?react';
import K301to500 from '../../assets/icons/K301to500.svg?react';
import K501to600 from '../../assets/icons/K501to600.svg?react';
import K601to900 from '../../assets/icons/K601to900.svg?react';
import K901to1M2 from '../../assets/icons/K901to1M2.svg?react';
import M1P2OrMore from '../../assets/icons/M1P2OrMore.svg?react';

export const optionsArr: Option[] = [
  {
    title: "€ 300K or less ",
    svg: <K300OrLess />,
    value: PriceType.K300OrLess,
  },
  {
    title: "€ 301K – € 500K",
    svg: <K301to500 />,
    value: PriceType.K301to500,
  },
  {
    title: "€ 501K – € 600K",
    svg: <K501to600 />,
    value: PriceType.K501to600,
  },
  {
    title: "€ 601K – € 900K",
    svg: <K601to900 />,
    value: PriceType.K601to900,
  },
  {
    title: "€ 901K – € 1.2 M",
    svg: <K901to1M2 />,
    value: PriceType.K901to1M2,
  },
  {
    title: "€ 1.2 M or more",
    svg: <M1P2OrMore />,
    value: PriceType.M1P2OrMore,
  },
];
