import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function(data){
    let errors = {} ; 
    if(Validator.isEmpty(data.name)){
        errors.name = 'This fiels is required';
    }
    if(Validator.isEmpty(data.email)){
        errors.email = 'This fiels is required';
    }
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'This fiels is required';
    }
    if(Validator.isEmpty(data.confirmPassword)){
        errors.confirmPassword = 'This fiels is required';
    }
    if(!Validator.equals(data.password, data.confirmPassword)){
        errors.confirmPassword = 'Passwords donot match';
    }
    
    return {
        errors, 
        isValid: isEmpty(errors)
    }
}
