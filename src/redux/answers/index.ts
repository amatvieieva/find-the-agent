import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { ActionType, Answers, FocusAgentType, PriceType } from "./interfaces";

const initialState: Answers = {
  action: ActionType.Sell,
  propertyTypes: [] as string[],
  selectedTime: null,
  location: '',
  price: [] as PriceType[],
  focusAgent: [] as FocusAgentType[],
};

const answersSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    actionRecorder(state, { payload }) {
      state.action = payload;
    },
    typesRecorder(state, {payload}) {
      state.propertyTypes = payload;
    },
    timeRecorder (state, {payload}) {
      state.selectedTime = payload;
    },
    locationRecorder (state, {payload}) {
      state.location = payload;
    },
    priceRecord (state, {payload}) {
      state.price = payload;
    },
    focusAgentRecord (state, {payload}) {
      state.focusAgent = payload;
    }
  },
});

export const { actionRecorder, typesRecorder, timeRecorder, locationRecorder, priceRecord, focusAgentRecord } = answersSlice.actions;

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  answersSlice.reducer
);
