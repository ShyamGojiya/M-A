import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PakMahitiService } from "./pakMahitiService";

export const addPakMahiti = createAsyncThunk(
  "PakMahiti/addPakMahiti",
  async (plantData, thunkAPI) => {
    try {
      return await PakMahitiService.addPakMahiti(plantData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const detailsPakMahiti = createAsyncThunk(
  "PakMahiti/detailsPakMahiti",
  async (thunkAPI) => {
    try {
      return await PakMahitiService.detailsPakMahiti();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePakMahiti = createAsyncThunk(
  "PakMahiti/deletePakMahiti",
  async (id, thunkAPI) => {
    try {
      return await PakMahitiService.deletePakMahiti(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  pakMahiti: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const PakMahitiSlice = createSlice({
  name: "PakMahiti",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPakMahiti.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPakMahiti.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(addPakMahiti.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(detailsPakMahiti.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(detailsPakMahiti.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.pakMahiti = action.payload;
      })
      .addCase(detailsPakMahiti.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(deletePakMahiti.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePakMahiti.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Delete Successfully!!";
      })
      .addCase(deletePakMahiti.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default PakMahitiSlice.reducer;
