import {createStore, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger';
import {gameReducer, GameState} from './reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
  debug: true,
}

const persistedReducer = persistReducer<GameState>(persistConfig, gameReducer);

export const store = createStore(
  persistedReducer, 
  undefined,
  compose(applyMiddleware(
    createLogger(),
  ))
)

export const persistor = persistStore(store, null, () => {store.getState()})
 
