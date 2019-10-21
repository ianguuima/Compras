import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage} from 'react-native'


// Redux promise
import promisseMiddleware from 'redux-promise';


// Redux-persist stuff
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'compra',
    storage: AsyncStorage,
  }


import indexReducer from './reducers/indexReducer';

const persistedReducer = persistReducer(persistConfig, indexReducer)

const storeWithMiddleware = applyMiddleware(promisseMiddleware)(createStore);
const store = storeWithMiddleware(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }
