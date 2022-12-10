import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer/reducer'

// const reducer = combineReducers({ HomeReducer, GlobalReducer })
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
