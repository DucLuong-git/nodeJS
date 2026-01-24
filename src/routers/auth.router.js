import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';

const authRouter = Router();
// localhost:3000/api/auth/register
authRouter.post('/register', register);
authRouter.post('/login', login);
export default authRouter;