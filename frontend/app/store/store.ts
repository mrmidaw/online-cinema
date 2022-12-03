import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { reducers } from "./rootReducer";

export const store = configureStore({
	reducer: reducers,
	devTools: true,
});

type AppDispatch = typeof store.dispatch;

export type TypeRootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
