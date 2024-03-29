import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<{ value: number }>) => {
      state.value = state.value - action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
