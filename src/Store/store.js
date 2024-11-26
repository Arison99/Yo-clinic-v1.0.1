import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/rootReducer';

const store = configureStore({
    reducer: rootReducer,
});

export default store;