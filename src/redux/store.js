import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './root-reduxer';
import todos from './app-saga'
// ROOT REDUCER: 
// SAGA FILE 

const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [logger, sagaMiddleWare];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleWare.run(todos);

export default store;