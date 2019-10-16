import { Router } from 'express';

import { validateNewUser } from '../middlewares/validate-input';
import { duplicateUserValidation } from '../middlewares/auth';
import { register } from '../controllers/auth';

const authRouter = Router();

authRouter.post(
  '/register',
  validateNewUser,
  duplicateUserValidation,
  register,
);

export default authRouter;
