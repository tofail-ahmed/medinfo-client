// redux/user/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'medInfoUser',
  initialState: {
      medInfoUserCred: null,
  },
  reducers: {
   setMedInfoUserCred : (state, action) => {
      state.userCred = action.payload;
    },
    clearMedInfoUserCred: (state) => {
      state.userCred = null;
    },
  },
});

export const { clearMedInfoUserCred,setMedInfoUserCred} = userSlice.actions;

export default userSlice.reducer;
