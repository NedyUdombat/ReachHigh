import { Router } from 'express';

import authRouter from './routes/auth';
import goalRouter from './routes/goal';

const router = Router();

// general route
router.use('/auth', authRouter);
router.use('/goal', goalRouter);

export default router;
