import axios from 'axios' ;

let service = {} ;
service.setAuthToken = (token)=>{
    if(token){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token ;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}


export default service ;