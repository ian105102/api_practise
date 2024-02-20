// article.route.js
import express from 'express';
import validate from 'express-validation';
import userCtrl from '../controllers/user.controller';
import paramValidation from '../../config/param-validation';    
const router = express.Router();

router.route('/').post(validate(paramValidation.createUser), userCtrl.userPost); 
router.route('/').get(userCtrl.userGet)

router.route('/:user_id').put(userCtrl.userPut);
router.route('/:user_id').delete(userCtrl.userDelete);
router.route('/login').post(userCtrl.userLogin); 
router.route('/checklogin').get(userCtrl.cheackLogin);
router.route('/logout').get(userCtrl.logout);
export default router;