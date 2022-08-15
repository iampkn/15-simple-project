import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
   name: "user",
   initialState: {
      token: null,
   },
   reducers: {
      login: (state, action) => {
         state.token = action.payload.token
      },
      logout: (state, action) => {
         state.token = null
      },
   },
})

export const { login, logout } = userSlice.actions
export const selectUser = (state) => state.user.token
export default userSlice.reducer
