import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pakPadhatiService } from "./pakPadhatiService";

export const addPakPadhati = createAsyncThunk(
  "pakPadhati/addPakPadhati",
  async (plantData, thunkAPI) => {
    try {
      return await pakPadhatiService.addPakPadhati(plantData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const detailsPakPadhati = createAsyncThunk(
  "pakPadhati/detailsPakPadhati",
  async (thunkAPI) => {
    try {
      return await pakPadhatiService.detailsPakPadhati();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePakPadhati = createAsyncThunk(
  "pakPadhati/deletePakPadhati",
  async (id, thunkAPI) => {
    try {
      return await pakPadhatiService.deletePakPadhati(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  pakPadhati: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const pakPadhatiSlice = createSlice({
  name: "pakPadhati",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPakPadhati.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPakPadhati.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.pakPadhati = action.payload;
      })
      .addCase(addPakPadhati.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(detailsPakPadhati.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(detailsPakPadhati.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.pakPadhati = action.payload;
      })
      .addCase(detailsPakPadhati.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(deletePakPadhati.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePakPadhati.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Delete Successfully!!";
      })
      .addCase(deletePakPadhati.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default pakPadhatiSlice.reducer;
