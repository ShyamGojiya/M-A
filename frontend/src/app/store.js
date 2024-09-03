import { configureStore } from "@reduxjs/toolkit";
import pakPadhatiSlice from "../features/PakPadhati/pakPadhatiSlice";
import userSlice from "../features/User/userSlice";
import pakMahitiSlice from "../features/PakMahiti/pakMahitiSlice";

export const store = configureStore({
  reducer: {
    pakPadhati: pakPadhatiSlice,
    pakMahiti: pakMahitiSlice,
    user: userSlice,
  },
});
