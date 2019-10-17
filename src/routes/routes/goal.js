import { Router } from 'express';

import { selectGoal, getAllGoals } from '../controllers/goal';
import { checkAuthorizedUser } from '../middlewares/authorized-user';

const goalRouter = Router();

goalRouter.post('/:goalId/select', checkAuthorizedUser, selectGoal);
goalRouter.get('/', checkAuthorizedUser, getAllGoals);

export default goalRouter;
