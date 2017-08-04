import axios from 'axios' ;

export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}

export function isUserExists(email){
    return dispatch =>{
        return axios.get('/api/users/check-for-existing-user?email='+email); 
    }
}