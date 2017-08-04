import jwt from 'jsonwebtoken';
import config from './../../config';
import User from './../user/user.model';

export function isAuthenticated(req, res, next){
    
    const authHeader = req.headers['authorization']; 
    let token; 
    
    if(authHeader){
        token = authHeader.split(' ')[1]; 
    }

    if(token){
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if(err) {
                res.status(401).json({error: 'Failed to authenticate'}) ; 
            }else{
                User.findByIdAsync(decoded.id, '-hashedPassword')
                    .then(user=>{
                        if(!user){
                            res.status(401).json({error: 'No user exists'}) ;       
                        }else{
                            req.user = user ; 
                            next(); 
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                        res.status(401).json({error: 'Database Error'}) ;       
                    })
            }
        })
    }else{
        res.status(403).json({
            error: 'No token provided'
        })
    }
}
