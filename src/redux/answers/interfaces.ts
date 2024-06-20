export enum ActionType {
  Sell = "Sell",
  Rent = "Rent",
}

export enum TimeType {
  RightAway = "Right away",
  OneToThreeMonths = "1-3 Months",
  FourPlusMonths = "4+ Months",
  AlreadyListed = "Already Listed",
}

export enum PriceType {
  K300OrLess = "€ 300K or less",
  K301to500 = "€ 301K – € 500K",
  K501to600 = "€ 501K – € 600K",
  K601to900 = "€ 601K – € 900K",
  K901to1M2 = "€ 901K – € 1.2 M",
  M1P2OrMore = "€ 1.2 M or more",
}

export enum FocusAgentType {
  FamilyHomesSpecialist = "Family Homes Specialist",
  InvestmentSpecialist = "Investment Specialist",
  QuintaFarmSpecialist = "Quinta/Farm Specialist",
  BuildingSpecialist = "Building Specialist",
  LuxuryPropertySpecialist = "Luxury Property Specialist",
  BoldDealsSpecialist = "Bold Deals Specialist",
  HistoricBuildingSpecialist = "Historic Building Specialist",
  NoneOfThoseJustBrilliantAgent = "None of those Just a brilliant agent"
}

export interface Answers {
  action: ActionType;
  propertyTypes: string[];
  selectedTime: TimeType | null;
  location: string;
  price: PriceType[];
  focusAgent: FocusAgentType[];
}
