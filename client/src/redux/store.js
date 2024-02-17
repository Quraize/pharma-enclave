import {configureStore, combineReducers } from '@reduxjs/toolkit';
import adminReducer from './admin/adminSlice.js';
import addReducer from './adminAction/addSlice.js';
import delReducer from './adminAction/delSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ admin: adminReducer, add: addReducer, delete: delReducer});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export const persistor = persistStore(store);