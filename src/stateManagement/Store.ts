import {configureStore} from '@reduxjs/toolkit';
import HomeSlice from '../screens/homescreen/HomeSlice';

export const store = configureStore({
  reducer: {
    homeReducer: HomeSlice,
  }, // Add your reducers here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
