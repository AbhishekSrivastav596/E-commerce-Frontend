import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name:'auth',
  initialState:{
    currentUser:null,
  },
  reducers:{
    setCurrentUser: (state,action) =>{
      const user = action.payload;
      state.currentUser = user;
    },
    removeCurrentUser: (state,action) =>{
      state.currentUser = null;
    },
  }

})
export default authSlice.reducer;

export const {setCurrentUser} = authSlice.actions
export const {removeCurrentUser} = authSlice.actions