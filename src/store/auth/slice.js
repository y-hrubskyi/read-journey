import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { signUp, signIn, signOut, refreshUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const authPending = (state) => {
  state.isLoading = true;
};

const authRejected = (state) => {
  state.isLoading = false;
};

const authInFulfilled = (state, { payload }) => {
  state.user.name = payload.name;
  state.user.email = payload.email;
  state.accessToken = payload.token;
  state.refreshToken = payload.refreshToken;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const authOutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.accessToken = null;
  state.refreshToken = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, { payload }) => {
      state.accessToken = payload.token;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.accessToken = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(signUp.pending, signIn.pending, signOut.pending),
        authPending
      )
      .addMatcher(isAnyOf(signUp.fulfilled, signIn.fulfilled), authInFulfilled)
      .addMatcher(
        isAnyOf(signUp.rejected, signIn.rejected, signOut.rejected),
        authRejected
      )
      .addMatcher(
        isAnyOf(signOut.fulfilled, signOut.rejected),
        authOutFulfilled
      ),
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

export const { setTokens } = authSlice.actions;

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
