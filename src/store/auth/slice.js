import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { signUp, signIn, signOut } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
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
      .addMatcher(isAnyOf(signUp.fulfilled, signIn.fulfilled), loginFulfilled)
      .addMatcher(
        isAnyOf(signOut.fulfilled, signOut.rejected),
        logoutFulfilled
      ),
});

export const { setTokens } = authSlice.actions;

export const authReducer = authSlice.reducer;
