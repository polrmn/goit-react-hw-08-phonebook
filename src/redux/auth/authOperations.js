import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserService, loginService, logOutService, signUpService, token } from "services/authServices";

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (user, { rejectWithValue }) => {
    try {
        return await signUpService(user)
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login', 
  async (user, {rejectWithValue}) => {
    try {
      const data = await loginService(user);
      token.set(data.token)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
})

export const getUserThunk = createAsyncThunk(
  'auth/getUser',
  async(_, { rejectWithValue, getState }) => {
    try {
      const savedToken = getState().auth.token
      if (!savedToken) {
        return rejectWithValue('no token');
      }
      token.set(savedToken);
      return await getUserService()
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async(_, {rejectWithValue, getState}) => {
    try {
      const savedToken = getState().auth.token;
      if (!savedToken) {
        return rejectWithValue('no token');
      }
      token.set(savedToken);
      const data = await logOutService();
      token.unSet();
      return data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

