import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/sfsdfsdf', loginUser);
router.post('/register', registerUser);

export default router;
