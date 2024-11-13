import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminOrderService } from "./orderService";

export const changeOrderType = createAsyncThunk(
  "order/change",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await AdminOrderService.OrderTypeChange(id, token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const allOrder = createAsyncThunk(
  "order/myOrder",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await AdminOrderService.getAllOrder(token);
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

export const AdminOrderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(allOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(changeOrderType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeOrderType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.order = action.payload;
      })
      .addCase(changeOrderType.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default AdminOrderSlice.reducer;
