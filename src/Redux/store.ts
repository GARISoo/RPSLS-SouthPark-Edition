import { configureStore } from '@reduxjs/toolkit';
import GameSlice from './GameSlice/GameSlice';

const store = configureStore({
  reducer: {
    game: GameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
