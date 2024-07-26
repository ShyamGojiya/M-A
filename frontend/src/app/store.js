import { configureStore } from "@reduxjs/toolkit";
import pakPadhatiSlice from "../features/PakPadhati/pakPadhatiSlice";

export const store = configureStore({
  reducer: {
    pakPadhati: pakPadhatiSlice,
  },
});
