import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {gameReducer} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, gameReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger)))
export const persistor = persistStore(store)