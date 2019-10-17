import { Router } from 'express';

import authRouter from './routes/auth';
import goalRouter from './routes/goal';
import taskRouter from './routes/task';

const router = Router();

// general route
router.use('/auth', authRouter);
router.use('/goal', goalRouter);
router.use('/task', taskRouter);

export default router;
