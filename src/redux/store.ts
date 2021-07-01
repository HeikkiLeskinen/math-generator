import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {gameReducer} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';


export const configureStore = () =>
  createStore(
    gameReducer,
    composeWithDevTools(applyMiddleware(logger)),
  );