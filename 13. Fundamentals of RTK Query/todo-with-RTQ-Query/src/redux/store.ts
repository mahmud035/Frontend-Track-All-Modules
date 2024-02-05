import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/api';
import todoReducer from './features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;