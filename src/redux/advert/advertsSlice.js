import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getAdvertsThunk } from './advertsOperations';

const initialState = {
  adverts: {
    catalog: [],
    isLoading: false,
    error: null,
  },
  favorites: [],
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        state.adverts.catalog = payload;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getAdvertsThunk.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(getAdvertsThunk.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setFavorites } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
