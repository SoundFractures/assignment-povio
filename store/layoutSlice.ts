/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LayoutState {
  isMobileNavOpen: boolean
  isLoginModalOpen: boolean
  isRegisterModalOpen: boolean
}

const initialState: LayoutState = {
  isMobileNavOpen: false,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setMobileNavOpen(state, action: PayloadAction<boolean>) {
      state.isMobileNavOpen = action.payload
      console.log('setMobileNavOpen', state.isMobileNavOpen)
      if (state.isLoginModalOpen) {
        state.isLoginModalOpen = false
      }
      if (state.isRegisterModalOpen) {
        state.isRegisterModalOpen = false
      }
    },
    setLoginModalOpen(state, action: PayloadAction<boolean>) {
      state.isLoginModalOpen = action.payload
    },
    setRegisterModalOpen(state, action: PayloadAction<boolean>) {
      state.isRegisterModalOpen = action.payload
    },
  },
})

export const { actions: layoutSliceActions } = layoutSlice
export default layoutSlice.reducer
