/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { configureStore, createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: { isDark: false, isFullView: true },
  reducers: {
    toggleIsDark: (state, action) =>
      (state = { ...state, isDark: !state.isDark }),
    toggleFullView: (state, action) =>
      (state = { ...state, isFullView: !state.isFullView }),
  },
});

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isFirstLoad: true,
    fixedNav: undefined,
    location: "paintings",
  },
  reducers: {
    toggleIsFirstLoad: (state, action) =>
      (state = { ...state, isFirstLoad: action.payload }),
    setFixedNav: (state, action) =>
      (state = {
        ...state,
        fixedNav: action.payload,
      }),
    setLocation: (state, action) =>
      (state = {
        ...state,
        location: action.payload,
      }),
  },
});

const headerSlice = createSlice({
  name: "header",
  initialState: { showName: false },
  reducers: {
    setShowName: (state, action) =>
      (state = { ...state, showName: action.payload }),
  },
});

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    nav: navSlice.reducer,
    header: headerSlice.reducer,
  },
});

export const { toggleIsDark, toggleFullView } = mainSlice.actions;
export const { toggleIsFirstLoad, setFixedNav, setPagesRefs, setLocation } =
  navSlice.actions;
export const { setShowName } = headerSlice.actions;
