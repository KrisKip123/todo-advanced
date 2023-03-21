import express from 'express';
import userController from '../controllers/user-controller.js';

const authRoute = express.Router();

authRoute
  .post('/registration', userController.registration)
  .post('/login', userController.login)
  .get('/logout', userController.logout);

export { authRoute };
