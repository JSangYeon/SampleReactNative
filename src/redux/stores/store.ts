// store.ts
// import { createStore } from 'redux';
import { legacy_createStore as createStore } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from '../reducers/reducer'; // reducer 파일 경로로 수정해주세요

// const store = createStore(rootReducer);
// const store = createStore(rootReducer);

const store = configureStore({
    reducer: rootReducer,
  });

export default store;

export type RootState = ReturnType<typeof rootReducer>;
