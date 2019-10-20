import { successResponse, serverError } from '../../utils/helpers';
import models from '../../db/models';

const { Goal, UserGoal, UserTask, Task } = models;

/**
 * Select A Goal
 * @param {object} req
 * @param {object} res
 * @returns {object} user-goal object
 */
export const selectGoal = async (req, res) => {
  try {
    const { id } = req.user;
    const { goalId } = req.params;
    const goal = await Goal.findOne({
      where: { id: goalId },
      include: [
        {
          model: Task,
          as: 'tasks',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
    });
    const isUserGoalExist = await UserGoal.findOne({
      where: { userId: id, goalId },
    });
    if (isUserGoalExist) {
      await UserGoal.destroy({ where: { userId: id, goalId } });
      goal.tasks.forEach(async task => {
        await UserTask.destroy({ where: { userId: id, taskId: task.id } });
      });
      return successResponse(res, 201, 'Successfully de-selected this goal');
    }
    const userGoals = await UserGoal.create({ userId: id, goalId });
    goal.tasks.forEach(async task => {
      await UserTask.create({ userId: id, taskId: task.id });
    });
    return successResponse(res, 201, 'Successfully selected this goal', {
      userGoals,
    });
  } catch (err) {
    return serverError(res);
  }
};

/**
 * Get All Users Goals
 * @param {object} req
 * @param {object} res
 * @returns {object} goals Array
 */
export const getAllUserGoals = async (req, res) => {
  const { user } = req;
  const goals = await UserGoal.findAll({
    where: { userId: user.id },
  });
  return successResponse(res, 200, 'Successfully retrieved all goals', {
    goals,
  });
};
