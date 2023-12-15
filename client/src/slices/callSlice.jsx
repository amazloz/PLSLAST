import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  callInfo: {
    current: "idle",
    video: false,
    audio: true,
    haveMedia: false,
    haveCreatedOffer: false,
  },
};

const callSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    setcallInfo: (state, action) => {
      state.callInfo = { ...state.callInfo, ...action.payload };
      localStorage.setItem("callInfo", JSON.stringify(state.callInfo));
    },
  },
});

export const { setcallInfo } = callSlice.actions;

export default callSlice.reducer;
