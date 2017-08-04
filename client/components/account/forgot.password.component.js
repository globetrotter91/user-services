import React, { Component } from 'react' ;
import ResetPasswordForm from './reset.password.form';

export default class ForgotPasswordComponent extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Reset Password</h2>
                    <ResetPasswordForm/>
                </div>
            </div>
        )
    }
}