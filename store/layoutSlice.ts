/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LayoutState {
  isMobileNavOpen: boolean
  isLoginModalOpen: boolean
  isRegisterModalOpen: boolean
  isProfileModalOpen: boolean
}

const initialState: LayoutState = {
  isMobileNavOpen: false,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isProfileModalOpen: false,
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setMobileNavOpen(state, action: PayloadAction<boolean>) {
      state.isMobileNavOpen = action.payload
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
    setProfileModalOpen(state, action: PayloadAction<boolean>) {
      state.isProfileModalOpen = action.payload
    },
  },
})

export const { actions: layoutSliceActions } = layoutSlice
export default layoutSlice.reducer
