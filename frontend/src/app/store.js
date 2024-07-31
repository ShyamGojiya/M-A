import { configureStore } from "@reduxjs/toolkit";
import pakPadhatiSlice from "../features/PakPadhati/pakPadhatiSlice";
import userSlice from "../features/User/userSlice";

export const store = configureStore({
  reducer: {
    pakPadhati: pakPadhatiSlice,
    user: userSlice,
  },
});
