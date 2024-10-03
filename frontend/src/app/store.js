import { configureStore } from "@reduxjs/toolkit";
import pakPadhatiSlice from "../features/PakPadhati/pakPadhatiSlice";
import AdminPakPadhatiSlice from "../Admin-features/PakPadhati/pakPadhatiSlice";
import userSlice from "../features/User/userSlice";
import pakMahitiSlice from "../features/PakMahiti/pakMahitiSlice";
import productSlice from "../features/Product/productSlice";

export const store = configureStore({
  reducer: {
    pakPadhati: pakPadhatiSlice,
    AdminPakPadhati: AdminPakPadhatiSlice,
    pakMahiti: pakMahitiSlice,
    user: userSlice,
    products: productSlice,
  },
});
