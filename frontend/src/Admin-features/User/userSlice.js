import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "./userService";

export const userDetails = createAsyncThunk(
  "user/userDetails",
  async (thunkAPI) => {
    try {
      return await userService.allUserDetails();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

const initialState = {
  UserData: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const adminUserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.UserData = action.payload;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default adminUserSlice.reducer;
