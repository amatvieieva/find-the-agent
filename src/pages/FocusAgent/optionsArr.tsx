import { Option } from "../../types/option";
import { FocusAgentType } from "../../redux/answers/interfaces";
import FamilyHomesSpecialist from '../../assets/icons/FamilyHomesSpecialist.svg?react';
import InvestmentSpecialist from '../../assets/icons/InvestmentSpecialist.svg?react';
import QuintaFarmSpecialist from '../../assets/icons/QuintaFarmSpecialist.svg?react';
import BuildingSpecialist from '../../assets/icons/BuildingSpecialist.svg?react';
import LuxuryPropertySpecialist from '../../assets/icons/LuxuryPropertySpecialist.svg?react';
import BoldDealsSpecialist from '../../assets/icons/BoldDealsSpecialist.svg?react';
import HistoricBuildingSpecialist from '../../assets/icons/HistoricBuildingSpecialist.svg?react';
import NoneOfThoseJustBrilliantAgent from '../../assets/icons/NoneOfThoseJustBrilliantAgent.svg?react';

export const optionsArr: Option[] = [
  {
    title: "Family Homes Specialist",
    svg: <FamilyHomesSpecialist />,
    value: FocusAgentType.FamilyHomesSpecialist,
  },
  {
    title: "Investement Specialist",
    svg: <InvestmentSpecialist />,
    value: FocusAgentType.InvestmentSpecialist,
  },
  {
    title: "Quinta/Farm Specialist",
    svg: <QuintaFarmSpecialist />,
    value: FocusAgentType.QuintaFarmSpecialist,
  },
  {
    title: "Building Specialist",
    svg: <BuildingSpecialist />,
    value: FocusAgentType.BuildingSpecialist,
  },
  {
    title: "Luxury Property Specialist",
    svg: <LuxuryPropertySpecialist />,
    value: FocusAgentType.LuxuryPropertySpecialist,
  },
  {
    title: "Bold Deals Specialist",
    svg: <BoldDealsSpecialist />,
    value: FocusAgentType.BoldDealsSpecialist,
  },
  {
    title: "Historic Building Specialist",
    svg: <HistoricBuildingSpecialist />,
    value: FocusAgentType.HistoricBuildingSpecialist,
  },
  {
    title: "Non of those Just a brilliant agent",
    svg: <NoneOfThoseJustBrilliantAgent />,
    value: FocusAgentType.NoneOfThoseJustBrilliantAgent,
  },
];
