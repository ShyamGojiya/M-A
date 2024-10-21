import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartService } from "./cartService";

export const addToCart = createAsyncThunk(
  "cart/getAll",
  async (data, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await cartService.addItemToCart(data, token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const myCart = createAsyncThunk("cart/getMyCart", async (thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    console.log("in myCart");

    const res = await cartService.getMyCart(token);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await cartService.deleteFromCart(id, token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async (data, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await cartService.updateCartQuantity(data, token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  cart: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(myCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(myCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cart = action.payload;
      })
      .addCase(myCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cart = "";
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(updateQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default cartSlice.reducer;
