import React, { Component } from 'react' ; 
import { Link } from 'react-router-dom' ;
import FormField from './../common/form.field' ;
//import validateInput from './../../../server/shared/validations/login';
import { login } from './../../actions/auth.actions';
import { connect } from 'react-redux'; 

class LoginForm extends Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: '', 
            errors: {}, 
            isLoading: false
        };
        this.onChange = this.onChange.bind(this) ;
        this.onSubmit = this.onSubmit.bind(this) ;
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    isValid(){
        //const { errors, isValid} = validateInput(this.state); 
//        if(!isValid){
  //          this.setState({ errors }); 
    //    }
        return true ;
    }

    onSubmit(e){
        e.preventDefault() ;
        if(this.isValid()){
            this.setState({ errors: {}, isLoading: true}); 
            this.props.login(this.state).then(
                (res) => this.context.router.history.push('/'),
                (err) => {
                    console.log('err is ',err); 
                    this.setState({ errors: err.response.data.errors, isLoading: false})  
                }
            )
        }
    }
    render(){
        
        const linksWithSignInButton = <Link to='/forgot-password' className="btn btn-link">Forgot Password</Link>  ;
        return (
            <form onSubmit={this.onSubmit}>
                { this.state.errors.form && <div className='alert alert-danger'>{this.state.errors.form}</div>}
                <FormField 
                    label='Email' 
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.onChange}
                    errors={this.state.errors.email}
                    required='required'/>

                <FormField 
                    label='Password' 
                    type='password' 
                    name='password'
                    value={this.state.password} 
                    errors={this.state.errors.email}
                    onChange={this.onChange}
                    required='required'/>
                 
                <FormField 
                    label='Sign In' 
                    type='button'
                    btnClass='btn-primary'
                    links={linksWithSignInButton}
                    loading={this.state.isLoading}
                    disabledItems={this.state.isLoading} 
                    />
            </form>
        );
    }
}
LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired, 
}
LoginForm.contextTypes = {
        router: React.PropTypes.object.isRequired
}


export default connect(null, { login })(LoginForm);