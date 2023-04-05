

import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import doctorStore from "./doctorStore";
import authStore from "./authStore";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1"; // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel1
};

const reducers = combineReducers({
    doctorStore,
    authStore
})

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: _persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})
export const persist = persistStore(store)

 export const getStates = store.getState()






