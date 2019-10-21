import { Router } from 'express';

import { markTask, getAllUserTasks } from '../controllers/task';
import { checkAuthorizedUser } from '../middlewares/authorized-user';

const taskRouter = Router();

taskRouter.get('/', checkAuthorizedUser, getAllUserTasks);
taskRouter.post('/:taskId', checkAuthorizedUser, markTask);

export default taskRouter;
