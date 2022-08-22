import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
   name: "user",
   initialState: {
      access_token: null,
      user: {},
      plan: {},
      message: null,
      isLoading: false,
   },
   reducers: {
      login: (state, action) => {
         state.access_token = action.payload.data.access_token
         state.user = action.payload.data.user
         state.plan = action.payload.data.plan
      },
      logout: (state) => {
         localStorage.clear()
      },
   },
})

export const { login, logout } = userSlice.actions
export const selectAccToken = (state) => state.user.access_token
export const selectUserData = (state) => state.user.user
export const selectPlan = (state) => state.user.plan
export default userSlice.reducer
