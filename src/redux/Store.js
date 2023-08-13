import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './RootReducer'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store