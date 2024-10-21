import { configureStore } from "@reduxjs/toolkit";
import pakPadhatiSlice from "../features/PakPadhati/pakPadhatiSlice";
import AdminPakPadhatiSlice from "../Admin-features/PakPadhati/pakPadhatiSlice";
import AdminPakMahitiSlice from "../Admin-features/PakMahiti/pakMahitiSlice";
import userSlice from "../features/User/userSlice";
import pakMahitiSlice from "../features/PakMahiti/pakMahitiSlice";
import productSlice from "../features/Product/productSlice";
import cartSlice from "../features/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    pakPadhati: pakPadhatiSlice,
    AdminPakPadhati: AdminPakPadhatiSlice,
    AdminPakMahiti: AdminPakMahitiSlice,
    pakMahiti: pakMahitiSlice,
    user: userSlice,
    products: productSlice,
    cart: cartSlice,
  },
});
