import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import blogReducer from './reducers/blogReducer'
import messageReducer from './reducers/messageReducer'
import userReducer from './reducers/userReducer'
//ADD reducers here
const reducer = combineReducers({	
	blogs: blogReducer,
	rmessage: messageReducer,
	ruser: userReducer
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store