import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import YTStreamReducer from './YTStreamReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  YTStream: YTStreamReducer
});

export default rootReducer;
