import {configureStore, combineReducers } from '@reduxjs/toolkit';
import adminReducer from './admin/adminSlice.js';
import addReducer from './adminAction/addSlice.js';
import delReducer from './adminAction/delSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['admin']
};

const rootReducer = combineReducers({ admin: persistReducer(persistConfig, adminReducer),
   add: addReducer,
    delete: delReducer,
  });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export const persistor = persistStore(store);