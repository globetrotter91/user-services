import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addFlashMessage } from './../actions/flash.messages.actions'; 

export default function(ComposedComponent){
    
    class AuthenticateComponent extends Component{
        componentWillMount() {
            if(!this.props.isAuthenticated){
                /*this.props.addFlashMessage({
                    type: 'error', 
                    text: 'Login to continue'
                })*/
                this.context.router.history.push('/login');
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.context.router.history.push('/login');
            }
        }

        render() {
            return(
                <ComposedComponent {...this.props} />
            );
        }
    }

    AuthenticateComponent.propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired
    }
    AuthenticateComponent.contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    function mapStateToProps(state){
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps, { addFlashMessage })(AuthenticateComponent); 
}
    

