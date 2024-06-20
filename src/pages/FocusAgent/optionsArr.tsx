import { Option } from "../../types/option";
import { Bungalow, Frame2, Group1, Group2, IconBoldDeals, InvestmentSpecialist, Landtobuild, LuxuryProperty } from "../../assets/icons/IconsComponent";
import { FocusAgentType } from "../../redux/answers/interfaces";

export const optionsArr: Option[] = [
  {
    title: "Family Homes Specialist",
    svg: <Group1 />,
    value: FocusAgentType.FamilyHomesSpecialist,
  },
  {
    title: "Investement Specialist",
    svg: <InvestmentSpecialist />,
    value: FocusAgentType.InvestmentSpecialist,
  },
  {
    title: "Quinta/Farm Specialist",
    svg: <Group2 />,
    value: FocusAgentType.QuintaFarmSpecialist,
  },
  {
    title: "Building Specialist",
    svg: <Landtobuild />,
    value: FocusAgentType.BuildingSpecialist,
  },
  {
    title: "Luxury Property Specialist",
    svg: <LuxuryProperty />,
    value: FocusAgentType.LuxuryPropertySpecialist,
  },
  {
    title: "Bold Deals Specialist",
    svg: <IconBoldDeals />,
    value: FocusAgentType.BoldDealsSpecialist,
  },
  {
    title: "Historic Building Specialist",
    svg: <Bungalow />,
    value: FocusAgentType.HistoricBuildingSpecialist,
  },
  {
    title: "Non of those Just a brilliant agent",
    svg: <Frame2 />,
    value: FocusAgentType.NoneOfThoseJustBrilliantAgent,
  },
];
