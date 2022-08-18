import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
   name: "user",
   initialState: {
      access_token: null,
      user: [],
      plan: null,
   },
   reducers: {
      login: (state, action) => {
         state.access_token = action.payload.token
         state.user = action.payload.user
         state.plan = action.payload.plan
      },
      logout: (state, action) => {
         state.access_token = null
      },
   },
})

export const { login, logout } = userSlice.actions
export const selectAccToken = (state) => state.user.token
export const selectUserData = (state) => state.user.user
export const selectPlan = (state) => state.user.plan
export default userSlice.reducer
