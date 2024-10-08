import { combineReducers, configureStore } from '@reduxjs/toolkit';
import movieReducer from 'redux/reducers/movieReducer';

const reducer = combineReducers({
  movie: movieReducer,
});

export const store = configureStore({
  reducer,
});
