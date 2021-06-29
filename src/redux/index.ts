import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { GameReducer } from "./reducer"
import { composeWithDevTools } from 'redux-devtools-extension';


export const configureStore = () =>
    createStore(
        GameReducer,
        composeWithDevTools(applyMiddleware(logger)),
    );