import { Router } from 'express';

import { markTask } from '../controllers/task';
import { checkAuthorizedUser } from '../middlewares/authorized-user';

const taskRouter = Router();

taskRouter.post('/:taskId', checkAuthorizedUser, markTask);

export default taskRouter;
