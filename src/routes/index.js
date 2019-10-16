import { Router } from 'express';

import authRouter from './routes/auth';

const router = Router();

// general route
router.use('/auth', authRouter);

export default router;
