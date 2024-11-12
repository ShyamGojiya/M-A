import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orderService } from "./orderService";

export const addToOrder = createAsyncThunk("order/place", async (thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const res = await orderService.addItemToOrder(token);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message);
  }
});

export const getMyOrder = createAsyncThunk(
  "order/myOrder",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await orderService.getAllOrder(token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

const initialState = {
  order: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(addToOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getMyOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(getMyOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default orderSlice.reducer;
