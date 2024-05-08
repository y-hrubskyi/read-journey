import { createAsyncThunk } from "@reduxjs/toolkit";

import API, { clearAuthHeader, setAuthHeader } from "@/services/axios";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/users/signin", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/users/signout");
      clearAuthHeader();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/current",
  async (_, { getState, rejectWithValue }) => {
    try {
      const persistedAccessToken = getState().auth.accessToken;
      if (persistedAccessToken === null) {
        return rejectWithValue("Unable to fetch user");
      }

      setAuthHeader(persistedAccessToken);
      const { data } = await API.get("/users/current");

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
