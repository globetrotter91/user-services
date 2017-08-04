import React, { Component } from 'react' ; 
import { Link } from 'react-router-dom' ;
import timezones from './../../data/timezones';
import map from 'lodash/map';
import FormField from './../common/form.field' ;
//import validateInput from './../../../server/shared/validations/signup'; 


class SignupForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '', 
            errors: {}, 
            isLoading: false, 
            invalid: false
        };
        this.onChange = this.onChange.bind(this) ;
        this.onSubmit = this.onSubmit.bind(this) ;
        this.checkUserExists = this.checkUserExists.bind(this) ;
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    isValid(){
        /*const { errors, isValid } = validateInput(this.state) ; 
        if(!isValid){
            this.setState({ errors });
        }
*/
        return true ;
    }

    checkUserExists(e){
        const field = e.target.name; 
        const val = e.target.value; 
        if(val!==''){
            this.props.isUserExists(val).then(res=>{
                let errors = this.state.errors; 
                let invalid;
                if(res.data.exists){
                    errors[field]='Another user exists with this email';
                    invalid = true ;
                }else{
                    errors[field] = '';
                    invalid = false ;
                } 
                this.setState({ errors, invalid }); 
            })

        }
    }


    onSubmit(e){
        e.preventDefault() ;
        if(this.isValid()){
            this.setState({ errors : {}, isLoading: true});
            this.props.userSignupRequest(this.state).then(
                ()=>{
                    this.setState({
                        isLoading: false 
                    })
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You have signed up successfully'
                    })

                    this.context.router.history.push('/home')
                    
                },
                (err) => this.setState({
                    errors : err.response.data, 
                    isLoading: false 
                })
            );
        }
    }
    render(){
        const { errors } = this.state; 
        const linksWithSignUpButton = <Link to='/login' className="btn btn-link">Login</Link> ;

        return (
            <form onSubmit={this.onSubmit}>
                <FormField 
                    label='Name' 
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.onChange}
                    errors={this.state.errors.name}
                    />

                <FormField 
                    label='Email' 
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    required='required'
                    errors={this.state.errors.email}
                    />

                <FormField 
                    label='Password' 
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
                    label='Sign Up' 
                    type='button'
                    btnClass='btn-primary'
                    links={linksWithSignUpButton}
                    loading={this.state.isLoading}
                    disabledItems={this.state.isLoading || this.state.invalid}
                    />
            </form>
        );
    }
}


SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default SignupForm;