import { Router } from 'express';

import { selectGoal, getAllUserGoals } from '../controllers/goal';
import { checkAuthorizedUser } from '../middlewares/authorized-user';

const goalRouter = Router();

goalRouter.post('/:goalId/select', checkAuthorizedUser, selectGoal);
goalRouter.get('/', checkAuthorizedUser, getAllUserGoals);

export default goalRouter;
