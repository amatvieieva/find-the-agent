export type PropertyNames =
  | "action"
  | "propertyTypes"
  | "selectedTime"
  | "location"
  | "price"
  | "focusAgent";


export function propertyName(name: PropertyNames) {
  const obj = {
    action: "Action",
    propertyTypes: "Property Type",
    selectedTime: "Planned Time to Sell",
    location: "Location",
    price: "Expected Price",
    focusAgent: "The agent is directed to",
  };
  return obj[name];
}
