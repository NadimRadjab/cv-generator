import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./features/ClassicTemplate/infoSlice";
export const store = configureStore({
  reducer: {
    classic: infoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
