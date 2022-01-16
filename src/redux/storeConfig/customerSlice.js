import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    value: {},
  },
  reducers: {
    getCustomers: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { getCustomers } = customerSlice.actions

export default customerSlice.reducer