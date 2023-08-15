import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import { RootState, AppDispatch } from '~/store'
import { layoutSliceActions } from '~/store/layoutSlice'

const useStore = () => {
  const useStoreDispatch: () => AppDispatch = useDispatch
  const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector

  return {
    useStoreDispatch,
    useStoreSelector,
    actions: {
      layout: layoutSliceActions,
    },
  }
}

export default useStore
