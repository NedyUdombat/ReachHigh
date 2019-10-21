import { Router } from 'express';

import { markTask, getAllUserTasks, getSingleTask } from '../controllers/task';
import { checkAuthorizedUser } from '../middlewares/authorized-user';

const taskRouter = Router();

taskRouter.get('/', checkAuthorizedUser, getAllUserTasks);
taskRouter.get('/:taskId', checkAuthorizedUser, getSingleTask);
taskRouter.post('/:taskId', checkAuthorizedUser, markTask);

export default taskRouter;
