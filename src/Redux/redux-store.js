import {combineReducers, createStore} from 'redux';
import contentReducer from './contentReducer';
import dialogsReducer from './dialogsReducer';

let reducers = combineReducers({
   profilePage: contentReducer,
   dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;