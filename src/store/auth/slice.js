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
  isRefreshing: false,
};

const loginFulfilled = (state, { payload }) => {
  state.user.name = payload.name;
  state.user.email = payload.email;
  state.accessToken = payload.token;
  state.refreshToken = payload.refreshToken;
  state.isLoggedIn = true;
};

const logoutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.accessToken = null;
  state.refreshToken = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
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
      .addMatcher(isAnyOf(signUp.fulfilled, signIn.fulfilled), loginFulfilled)
      .addMatcher(
        isAnyOf(signOut.fulfilled, signOut.rejected),
        logoutFulfilled
      ),
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

export const { setTokens } = authSlice.actions;

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
