import { createSelector } from '@reduxjs/toolkit';

export const selectAllAdverts = state => state.adverts.adverts.catalog;
export const selectFavorites = state => state.adverts.favorites;
export const selectPerPage = state => state.adverts.adverts.perPage;
export const selectFilter = state => state.adverts.filter;

export const selectVisibleAdverts = createSelector(
  [selectAllAdverts, selectFilter],
  (adverts, filter) => {
    return adverts.filter(advert =>
      advert.location.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
