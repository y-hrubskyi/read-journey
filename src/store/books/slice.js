import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  fetchOwnLibrary,
  addToLibraryNewBook,
  addToLibraryById,
  removeFromLibraryById,
} from "./operations";

const initialState = {
  library: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearLibrary: (state) => {
      state.library = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchOwnLibrary.fulfilled, (state, { payload }) => {
        state.library = payload;
      })
      .addCase(removeFromLibraryById.fulfilled, (state, { payload }) => {
        state.library = state.library.filter((book) => book._id !== payload.id);
      })
      .addMatcher(
        isAnyOf(addToLibraryNewBook.fulfilled, addToLibraryById.fulfilled),
        (state, { payload }) => {
          state.library.push(payload);
        }
      ),
});

export const { clearLibrary } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
