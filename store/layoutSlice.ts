/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LayoutState {
  isMobileNavOpen: boolean
}

const initialState: LayoutState = {
  isMobileNavOpen: false,
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setMobileNavOpen(state, action: PayloadAction<boolean>) {
      state.isMobileNavOpen = action.payload
    },
  },
})

export const { setMobileNavOpen } = layoutSlice.actions
export default layoutSlice.reducer
