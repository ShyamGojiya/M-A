import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "./userService";

export const registerUser = createAsyncThunk(
  "user/register",
  async (newUser, thunkAPI) => {
    try {
      console.log("slice : " + newUser);
      return await userService.registerUser(newUser);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData, thunkAPI) => {
    try {
      console.log(loginData);
      return await userService.loginUser(loginData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (arg, thunkAPI) => {
  try {
    return await userService.logoutUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || "error occured");
  }
});

export const myProfileDetails = createAsyncThunk(
  "user/my_profile",
  async (arg, thunkAPI) => {
    try {
      return await userService.myProfile();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "error occured");
    }
  }
);

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAuthenticated: false,
  user: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.isAuthenticated = false;
        state.message = action.error;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.message = "none";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isAuthenticated = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(myProfileDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(myProfileDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(myProfileDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.isAuthenticated = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isAuthenticated = false;
        state.message = "logeed out success";
        // state.user = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.isAuthenticated = false;
      });
  },
});

export default userSlice.reducer;
