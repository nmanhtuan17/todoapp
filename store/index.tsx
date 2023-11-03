import { createStore, applyMiddleware, Store } from 'redux';
import todoReducer from './reducer/todoReducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface RootState {

}

interface TodoAction {
  type: string;
  payload: any;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store: Store<RootState, TodoAction> = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
