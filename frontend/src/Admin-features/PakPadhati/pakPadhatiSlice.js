import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pakPadhatiService } from "./pakPadhatiService";

// export const allPakPadhati = createAsyncThunk(
//   "pakPadhati/getAll",
//   async (thunkAPI) => {
//     try {
//       return await pakPadhatiService.allPakPadhati();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const singlePakPadhati = createAsyncThunk(
//   "pakPadhati/singlePakPadhati",
//   async (id, thunkAPI) => {
//     try {
//       return await pakPadhatiService.singlePakPadhati(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const addPakPadhati = createAsyncThunk(
  "pakPadhati/addPakPadhati",
  async (plantData, thunkAPI) => {
    try {
      return await pakPadhatiService.addPakPadhati(plantData);
    } catch (error) {
      console.log(error);
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
      });
  },
});

export default pakPadhatiSlice.reducer;
