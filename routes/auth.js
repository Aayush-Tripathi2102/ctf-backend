import express from 'express';
import { body } from 'express-validator';
import { register, login, getMe } from '../controllers/authController.js';
import { runValidation } from '../middlewares/validate.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post(
  '/signup',
  [
    body('username').isLength({ min: 3 }).withMessage('username min 3 chars'),
    body('email').isEmail().withMessage('valid email required'),
    body('password').isLength({ min: 6 }).withMessage('password min 6 chars')
  ],
  runValidation,
  register
);

router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').exists()
  ],
  runValidation,
  login
);

router.get('/me', auth, getMe);

export default router;
