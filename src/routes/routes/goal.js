import { Router } from 'express';

import { selectGoal } from '../controllers/goal';
import { checkAuthorizedUser } from '../middlewares/authorized-user';

const goalRouter = Router();

goalRouter.post('/:goalId/select', checkAuthorizedUser, selectGoal);

export default goalRouter;
