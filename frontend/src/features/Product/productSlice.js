import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "./productService";

export const allProduct = createAsyncThunk(
  "product/getAll",
  async (thunkAPI) => {
    try {
      return await productService.allProduct();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const singleProduct = createAsyncThunk(
  "product/getSingle",
  async (id, thunkAPI) => {
    try {
      return await productService.singleProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCartItems = createAsyncThunk(
  "product/getCartItems",
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const data = await productService.getCartDetails(token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  product: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  singleProductData: "",
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(allProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(singleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleProductData = action.payload;
      })
      .addCase(singleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cart = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.cart = [];
        state.message = action.error;
      });
  },
});

export default productSlice.reducer;
