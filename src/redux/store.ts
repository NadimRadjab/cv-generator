import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./features/Info/infoSlice";
import designerSlice from "./features/DesignerTemplate/designerSlice";
export const store = configureStore({
  reducer: {
    classic: infoSlice,
    designer: designerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
