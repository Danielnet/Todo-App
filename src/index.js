import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'

const initialState = {
   todos: [],
   isLoading:false,
   validInput:true
}

const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
