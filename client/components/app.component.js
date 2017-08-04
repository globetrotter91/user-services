import React , { Component } from 'react';
import NavBarComponent from './common/nav.bar.component';
import routes from './routes';
import FlashMessagesComponent from './common/alert/flash.messages.component';

export default class App extends Component{
    render(){
        return (
            <div className='container-custom'>
                <NavBarComponent />
                <FlashMessagesComponent />
                <div className='page-header'>
                    
                    {routes}
                </div>
            </div>
        );
    }
}