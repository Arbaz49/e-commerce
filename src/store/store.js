import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartSlice from "./CartSlice"

const persistConfig = {
  key: 'cartKey',
  storage,
}
const persistedReducer = persistReducer(persistConfig,cartSlice )

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
export const store=configureStore({
  reducer: {
    cart:persistedReducer
  },
})
export const Persistor = persistStore(store)