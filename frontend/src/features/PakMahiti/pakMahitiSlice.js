import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pakMahitiService } from "./pakMahitiService";

export const allPakMahiti = createAsyncThunk(
  "pakMahiti/getAll",
  async (thunkAPI) => {
    try {
      return await pakMahitiService.allPakMahiti();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const singlePakMahiti = createAsyncThunk(
  "pakMahiti/singlePakMahiti",
  async (id, thunkAPI) => {
    try {
      return await pakMahitiService.singlePakMahiti(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  pakMahiti: "",
  singlePakMahiti: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const pakMahitiSlice = createSlice({
  name: "pakMahiti",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allPakMahiti.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allPakMahiti.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.pakMahiti = action.payload;
      })
      .addCase(allPakMahiti.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(singlePakMahiti.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singlePakMahiti.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singlePakMahiti = action.payload;
      })
      .addCase(singlePakMahiti.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default pakMahitiSlice.reducer;
