import { Option } from "../../types/option";
import { PriceType } from "../../redux/answers/interfaces";
import { Group, Group5, IconAmount1, IconAmount2, IconAmount3, IconAmount4 } from "../../assets/icons/IconsComponent";

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
    svg: <Group />,
    value: PriceType.K901to1M2,
  },
  {
    title: "€ 1.2 M or more",
    svg: <Group5 />,
    value: PriceType.M1P2OrMore,
  },
];
