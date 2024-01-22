import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import promise from 'redux-promise';
import { apiMiddleware } from "./middleware/apimiddleware";

import thunk from 'redux-thunk';

import rootReducer from './reducers'; // the value from combineReducers

const middleware = [promise, apiMiddleware, thunk];

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

if (__DEV__) {
	middleware.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };
