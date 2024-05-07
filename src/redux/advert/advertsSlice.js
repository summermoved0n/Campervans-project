import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getAdvertsThunk, getAdvertByIdThunk } from './advertsOperations';

const initialState = {
  adverts: {
    catalog: [],
    isModalOpen: false,
    modalItemId: null,
    modalContent: {},
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
    toggleModalWindow(state, { payload }) {
      state.adverts.isModalOpen = payload;
    },
    recordModalId(state, { payload }) {
      state.adverts.modalItemId = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        state.adverts.catalog = payload;
        state.isLoading = false;
      })
      .addCase(getAdvertByIdThunk.fulfilled, (state, { payload }) => {
        state.adverts.modalContent = { ...payload };
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getAdvertsThunk.pending, getAdvertByIdThunk.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getAdvertsThunk.rejected, getAdvertByIdThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  toggleModalWindow,
  recordModalId,
} = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
