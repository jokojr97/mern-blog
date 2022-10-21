import { createStore } from 'redux'
import reducer from './reducer/reducer'

// const reducer = combineReducers({ HomeReducer, GlobalReducer })
const store = createStore(reducer);

export default store;
