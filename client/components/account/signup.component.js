import React, { Component } from 'react'; 
import SignupForm from './signup.form' ;
import { connect } from 'react-redux'; 
import { userSignupRequest, isUserExists } from './../../actions/signup.actions';
import { addFlashMessage } from './../../actions/flash.messages.actions';

class SignupComponent extends Component{
    
    render(){
        const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
        return(
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Sign Up</h2>
                    <SignupForm 
                        isUserExists={isUserExists} 
                        userSignupRequest={userSignupRequest} 
                        addFlashMessage={addFlashMessage} 
                        />
                </div>
            </div>
        )
    }
}


SignupComponent.protoTypes = {
    userSignupRequest: React.PropTypes.func.isRequired, 
    addFlashMessage : React.PropTypes.func.isRequired, 
    isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, { isUserExists, userSignupRequest , addFlashMessage })(SignupComponent)