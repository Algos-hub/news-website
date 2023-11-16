import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isDark: false,
    favorites: [],
    bookmarks: [],
    accounts: [],
    keywords: [],
  },
};

export const darkSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.value.isDark = !state.value.isDark;
    },
  },
});

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action) {},
    removeFavorite(state, action) {},
  },
});
export const bookSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: { addBookmark(state, action) {}, removeBookmark(state, action) {} },
});
export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    createAccount(state, action) {},
    deleteAccount(state, action) {},
  },
});
export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter(state, action) {},
    removeFilter(state, action) {},
  },
});
export const keywordSlice = createSlice({
  name: "keywords",
  initialState,
  reducers: {
    addkeyword(state, action) {},
    removeKeyword(state, action) {},
  },
});

export const { changeTheme } = darkSlice.actions;
export default darkSlice.reducer;
