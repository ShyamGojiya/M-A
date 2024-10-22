import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "./productService";

export const addNewProduct = createAsyncThunk(
  "product/addNewProduct",
  async (data, thunkAPI) => {
    try {
      return await productService.newProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

const initialState = {
  product: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const adminProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default adminProductSlice.reducer;
