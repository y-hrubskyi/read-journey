import { createAsyncThunk } from '@reduxjs/toolkit';

import API from '@/services/axios';

export const fetchOwnLibrary = createAsyncThunk(
  'books/fetchOwnLibrary',
  async (searchParams, { rejectWithValue }) => {
    try {
      const { data } = await API.get(`/books/own?${searchParams}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addToLibraryById = createAsyncThunk(
  'books/addById',
  async (bookId, { rejectWithValue }) => {
    try {
      const { data } = await API.post(`/books/add/${bookId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const removeFromLibraryById = createAsyncThunk(
  'books/removeById',
  async (bookId, { rejectWithValue }) => {
    try {
      const { data } = await API.delete(`/books/remove/${bookId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addToLibraryNewBook = createAsyncThunk(
  'books/addNewBook',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/books/add', book);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
