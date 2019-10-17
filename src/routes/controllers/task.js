import {
  successResponse,
  serverError,
  errorResponse,
} from '../../utils/helpers';
import models from '../../db/models';

const { UserTask } = models;

export const markTask = async (req, res) => {
  const { taskId } = req.params;
  const { id } = req.user;
  try {
    const task = await UserTask.findOne({ where: { taskId } });
    if (task.completed) {
      const incompleteTask = await UserTask.update(
        { completed: false },
        { where: { userId: id, taskId } },
      );
      return successResponse(
        res,
        201,
        'Successfully set this task to incomplete',
        incompleteTask,
      );
    }
    const completeTask = await UserTask.update(
      { completed: true },
      { where: { userId: id, taskId } },
    );
    return successResponse(res, 201, 'Successfully completed this task', {
      completeTask,
    });
  } catch (err) {
    return serverError(res);
  }
};
