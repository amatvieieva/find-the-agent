import { ReactNode } from "react";
import { FocusAgentType, PriceType, TimeType } from "../redux/answers/interfaces";

export interface Option {
  svg: ReactNode;
  title: string;
  value: TimeType | PriceType | FocusAgentType;
}
