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

const initialState = {
  product: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  singleProductData: "",
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
      });
  },
});

export default productSlice.reducer;
