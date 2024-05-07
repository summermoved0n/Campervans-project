import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllAdverts, getAdvertById } from 'services/api-services';

export const getAdvertsThunk = createAsyncThunk(
  'adverts/get-all-adverts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllAdverts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAdvertByIdThunk = createAsyncThunk(
  'adverts/get-one-advert',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getAdvertById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
