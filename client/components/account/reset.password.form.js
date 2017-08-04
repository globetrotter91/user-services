import React, { Component } from 'react' ; 
import { Link } from 'react-router-dom' ;
import FormField from './../common/form.field' ;

export default class ResetPasswordForm extends Component{

    constructor(){
        super();
        this.state = {
            email: ''            
        };
        this.onChange = this.onChange.bind(this) ;
        this.onSubmit = this.onSubmit.bind(this) ;
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    onSubmit(e){
        e.preventDefault() ;
        console.log(this.state) ;
    }
    render(){
        
        const linksWithRPButton = <Link to='/login' className="btn btn-link">Login</Link>  ;
        return (
            <form onSubmit={this.onSubmit}>
   
                <FormField 
                    label='Email' 
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.onChange}
                    required='required'/>
                <FormField 
                    label='Send Reset Instructions' 
                    type='button'
                    btnClass='btn-primary'
                    links={linksWithRPButton}
                    />
            </form>
        );
    }
}