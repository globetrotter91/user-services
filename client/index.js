import React from 'react';
import { render } from 'react-dom';
import styles from './assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux' ;
import thunk from 'redux-thunk' ; 
import { createStore, applyMiddleware, compose } from 'redux' ;
import App from './components/app.component' ;
import rootReducer from './reducers/root.reducer'; 
import AuthService from './utils/auth.service' ;
import jwtDecode from 'jwt-decode' ;
import { setCurrentUser } from './actions/auth.actions';


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
    
);

if(localStorage.siteToken){
    AuthService.setAuthToken(localStorage.siteToken) ;
    store.dispatch(setCurrentUser(jwtDecode(localStorage.siteToken)))
}


render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <App />
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('app'));