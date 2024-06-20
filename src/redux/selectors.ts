import { RootState } from "./store";

export const selectAction = (state: RootState) => state.action;
export const selectTypes = (state: RootState) => state.propertyTypes;
export const selectTime = (state: RootState) => state.selectedTime;
export const selectLocation = (state: RootState) => state.location;
export const selectPrice = (state: RootState) => state.price;
export const selectFocusAgent = (state: RootState) => state.focusAgent;
export const selectAnswers = (state: RootState) => state;