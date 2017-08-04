import Promise from 'bluebird' ;
import bcrypt from 'bcrypt' ; 
import jwt from 'jsonwebtoken' ;
import config from '../../config';
import User from './../user/user.model';

let controller = {} ; 

controller.login = (req,res) => {
    const { email, password } = req.body ; 
    User.findOneAsync({email: email})
        .then(user=>{
            if(user){
                if(bcrypt.compareSync(password, user.hashedPassword)){
                    const token = jwt.sign({
                        id: user._id, 
                        role: user.role
                    }, config.jwtSecret);

                    res.status(200).json({ token }); 
                }else{
                    res.status(401).json({errors: {form: 'Invalid Credentials'}})    
                }
            }else{
                res.status(401).json({errors: {form: 'Invalid Credentials'}})
            }
        })

    
}

export default controller