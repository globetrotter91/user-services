import axios from 'axios'; 
import AuthService from './../utils/auth.service';
import jwtDecode from 'jwt-decode' ;
import { SET_CURRENT_USER } from './../constants';

export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER, 
        user: user
    }
}

export function login(data){
    return dispatch => {
        return axios.post('/api/auth', data).then(res=>{
            const token = res.data.token; 
            localStorage.setItem('siteToken', token); 
            AuthService.setAuthToken(token); 
            //console.log(jwtDecode(token));
            dispatch(setCurrentUser(jwtDecode(token))) ;
        }); 
    }
}

export function logout(){
    return dispatch =>{
        localStorage.removeItem('siteToken');
        AuthService.setAuthToken(false); 
        dispatch(setCurrentUser({})); 
    }
}
