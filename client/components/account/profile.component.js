import React, { Component } from 'react' ;
import FormField from './../common/form.field';
import { updatePassword } from './../../actions/profile.actions' ;
import { connect } from 'react-redux'; 

class ProfileComponent extends Component{

    constructor(){
        super(); 
        this.state = {
            oldPassword: '', 
            password: '',
            confirmPassword: '', 
            errors: {}, 
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onSubmit(e){
        e.preventDefault(); 
        console.log(this.state); 

        this.setState({ errors: {}, isLoading: true })
        if(this.state.password == this.state.confirmPassword){
            this.props.updatePassword(this.state).then(
                res => {
                    this.setState({
                            isLoading: false 
                        })
                        this.props.addFlashMessage({
                            type: 'success',
                            text: 'Password updated successfully'
                        })

                }, 
                err => { this.setState({ errors : err.response.data.errors, isLoading: false }); }
            );
        }
        else{
            this.setState({ errors: {confirmPassword:'Passwords dont match'}, isLoading: false })
        }
        
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    <h2>Change Password</h2>
                    <form onSubmit={this.onSubmit}>
                        <FormField 
                            label='Current Password' 
                            type='password' 
                            name='oldPassword'
                            value={this.state.oldPassword} 
                            onChange={this.onChange}
                            required='required'
                            errors={this.state.errors.oldPassword}
                            />
                        <FormField 
                            label='New Password' 
                            type='password' 
                            name='password'
                            value={this.state.password} 
                            onChange={this.onChange}
                            required='required'
                            errors={this.state.errors.password}
                            />

                        <FormField 
                            label='Confirm Password' 
                            type='password'
                            name='confirmPassword' 
                            value={this.state.confirmPassword} 
                            onChange={this.onChange}
                            required='required'
                            errors={this.state.errors.confirmPassword}
                            />    
                                        
                        <FormField 
                            label='Update Password' 
                            type='button'
                            btnClass='btn-primary'
                            loading={this.state.isLoading}
                            disabledItems={this.state.isLoading}
                            />
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { updatePassword })(ProfileComponent);