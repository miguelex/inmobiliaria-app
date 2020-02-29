import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, {FirebaseContext} from './server';
import { initialState } from './sesion/initialState';
import { StateProvider } from './sesion/store';
import sesionReducer from './sesion/reducers/sesionReducer';

ReactDOM.render(
<FirebaseContext.Provider value ={new Firebase()}>
    <StateProvider iniiialState={initialState} reducer={sesionReducer}>
    <App />
    </StateProvider>   
</FirebaseContext.Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
