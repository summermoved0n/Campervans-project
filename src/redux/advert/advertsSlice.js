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
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(item => item._id !== payload);
    },
    onLoadMoreClick(state, { payload }) {
      state.adverts.perPage = state.adverts.perPage + payload;
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

export const { addToFavorites, removeFromFavorites, onLoadMoreClick } =
  advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
