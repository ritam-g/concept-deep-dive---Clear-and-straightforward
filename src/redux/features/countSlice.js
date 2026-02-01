import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increseByAmount:(state,action)=>{
        state.value +=action.payload
    }
  }
});

export const { increment, decrement,increseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
