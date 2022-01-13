import { createSlice } from "@reduxjs/toolkit"

export const PinReducer = createSlice({
  name: "pinned",
  initialState: {
    q1: null,
    q2: null,
    q3: null
  },
  reducers: {
    setPinned: (state, action) => {
      if (state[action.payload.quarter] === action.payload.line) {
        state[action.payload.quarter] = null
      } else {
        state[action.payload.quarter] = action.payload.line
      }
    }
  }
})

export const { setPinned } = PinReducer.actions

export default PinReducer.reducer
