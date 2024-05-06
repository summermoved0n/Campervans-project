import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllAdverts } from 'services/api-services';

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
