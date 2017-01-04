/**
 * Created by nalantianyi on 2017/1/3.
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import  rootReducer from './reducers';

//创建日志
const loggerMiddleware = createLogger();
export default  function configureStore(preloadedState) {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware));
}