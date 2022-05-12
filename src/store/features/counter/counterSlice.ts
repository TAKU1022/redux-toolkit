import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    const fetchCount = (amount = 1) => {
      return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: amount }), 500)
      );
    };

    const response = await fetchCount(amount);

    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementIfOdd: (state, action: PayloadAction<number>) => {
      if (state.value % 2 === 1) {
        state.value += action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, incrementByAmount, incrementIfOdd } =
  counterSlice.actions;

export default counterSlice.reducer;
