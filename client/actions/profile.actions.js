import axios from 'axios';

export function updatePassword(data){
    return dispatch => {
        return axios.patch('/api/users/password', data)
    }
}