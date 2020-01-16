import express from 'express';
import UserController from '../controller/user.controller';
import UserValidation from '../middlewares/user.validation';

const router = express.Router();

router.post('/signin', UserValidation.validateLogin, UserController.userSignin);

export default router;