import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileInfo: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfiles: (state, action) => {
      state.profileInfo = action.payload;
      localStorage.setItem("profileInfo", JSON.stringify(action.payload));
    },
  },
});

export const { setProfiles } = profileSlice.actions;

export default profileSlice.reducer;
