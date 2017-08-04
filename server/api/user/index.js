import express from 'express' ; 
import controller from './user.controller';
import { isAuthenticated } from './../services/auth.service'; 


let router = express.Router();
/*
router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);

router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.post('/password-with-code', controller.changePasswordWithCode);
router.post('/reset-password-step-1', controller.generateResetPasswordMail);
router.post('/set-avatar', auth.isAuthenticated(), controller.setAvatar);
router.post('/set-default-cloud', auth.isAuthenticated(), controller.setDefaultCloud);
router.get('/:id', auth.isAuthenticated(), controller.show);
*/
router.get('/check-for-existing-user', controller.checkExisting);
router.post('/', controller.create);
router.patch('/password', isAuthenticated, controller.changePassword);

/*router.post('/pay', auth.isAuthenticated(), controller.upgradeAccount);
router.post('/signup', controller.signUpFromWeb);
router.post('/redeem', auth.isAuthenticated(), controller.redeemCode);
*/
export default router ; 