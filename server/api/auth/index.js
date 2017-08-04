import express from 'express' ; 
import controller from './auth.controller';

let router = express.Router();

router.post('/', controller.login);

export default router ; 