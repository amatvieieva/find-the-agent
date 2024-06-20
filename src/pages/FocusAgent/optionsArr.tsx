import { Option } from "../../types/option";
import IconAmount1 from "../../assets/icons/Group1.svg?react";
import IconAmount2 from "../../assets/icons/Icon investment-specialist med.svg?react";
import IconAmount3 from "../../assets/icons/Group2.svg?react";
import IconAmount4 from "../../assets/icons/landtobuild.svg?react";
import IconAmount5 from "../../assets/icons/icon_luxury-property med.svg?react";
import IconAmount6 from "../../assets/icons/Icon BoldDeals med.svg?react";
import IconAmount7 from "../../assets/icons/bungalow.svg?react";
import IconAmount8 from "../../assets/icons/Frame2.svg?react";
import { FocusAgentType } from "../../redux/answers/interfaces";

export const optionsArr: Option[] = [
  {
    title: "Family Homes Specialist",
    svg: <IconAmount1 />,
    value: FocusAgentType.FamilyHomesSpecialist,
  },
  {
    title: "Investement Specialist",
    svg: <IconAmount2 />,
    value: FocusAgentType.InvestmentSpecialist,
  },
  {
    title: "Quinta/Farm Specialist",
    svg: <IconAmount3 />,
    value: FocusAgentType.QuintaFarmSpecialist,
  },
  {
    title: "Building Specialist",
    svg: <IconAmount4 />,
    value: FocusAgentType.BuildingSpecialist,
  },
  {
    title: "Luxury Property Specialist",
    svg: <IconAmount5 />,
    value: FocusAgentType.LuxuryPropertySpecialist,
  },
  {
    title: "Bold Deals Specialist",
    svg: <IconAmount6 />,
    value: FocusAgentType.BoldDealsSpecialist,
  },
  {
    title: "Historic Building Specialist",
    svg: <IconAmount7 />,
    value: FocusAgentType.HistoricBuildingSpecialist,
  },
  {
    title: "Non of those Just a brilliant agent",
    svg: <IconAmount8 />,
    value: FocusAgentType.NoneOfThoseJustBrilliantAgent,
  },
];
