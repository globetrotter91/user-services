import React, { Component } from 'react' ;
import LoginForm from './login.form';

export default class LoginComponent extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Sign In</h2>
                    <LoginForm/>
                </div>
            </div>
        )
    }
}