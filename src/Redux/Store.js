import filterSlice from './filterSlice';
import { contactsApi } from './ContactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/AuthSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistFilterConfig = {
  key: 'filter',
  storage,
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filter: persistReducer(persistFilterConfig, filterSlice),
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});
const persistor = persistStore(store);
export { persistor, store };
