import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pakPadhatiService } from "./pakPadhatiService";

export const allPakPadhati = createAsyncThunk(
  "pakPadhati/getAll",
  async (thunkAPI) => {
    try {
      return await pakPadhatiService.allPakPadhati();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const singlePakPadhati = createAsyncThunk(
  "pakPadhati/singlePakPadhati",
  async (id, thunkAPI) => {
    try {
      return await pakPadhatiService.singlePakPadhati(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      .addCase(allPakPadhati.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allPakPadhati.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.pakPadhati = action.payload;
      })
      .addCase(allPakPadhati.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(singlePakPadhati.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singlePakPadhati.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singlePakPadhati = action.payload;
      })
      .addCase(singlePakPadhati.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default pakPadhatiSlice.reducer;
