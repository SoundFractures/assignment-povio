import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '~/store'
import { layoutSliceActions } from '~/store/layoutSlice'

const useStore = () => {
  const useStoreDispatch: () => AppDispatch = useDispatch
  const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector

  const actions = {
    layoutSlice: layoutSliceActions,
  }

  return {
    useStoreDispatch,
    useStoreSelector,
    actions,
  }
}

export default useStore
