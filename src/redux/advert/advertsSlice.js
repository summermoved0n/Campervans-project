import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getAdvertsThunk } from './advertsOperations';

const initialState = {
  adverts: {
    catalog: [],
    isLoading: false,
    error: null,
  },
  checkboxFilter: [],
  radiobuttonFilter: '',
  filter: '',
  favorites: [],
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(item => item._id !== payload);
    },
    onLoadMoreClick(state, { payload }) {
      state.adverts.perPage = state.adverts.perPage + payload;
    },
    setCheckboxFilter(state, { payload }) {
      state.checkboxFilter = state.adverts.checkboxFilter.push(payload);
    },
    extraReducers: builder => {
      builder
        .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
          console.log(payload);
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
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  onLoadMoreClick,
  setFilter,
} = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
