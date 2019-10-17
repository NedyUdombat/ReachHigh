import {
  successResponse,
  serverError,
  errorResponse,
} from '../../utils/helpers';
import models from '../../db/models';

const { Goal, UserGoal, Task } = models;

/**
 * Select A Goal
 * @param {object} req
 * @param {object} res
 * @returns {object} user-goal object
 */
export const selectGoal = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const { goalId } = req.params;
    await Goal.findByPk(goalId);
    const isUserGoalExist = await UserGoal.findOne({
      where: { userId: id, goalId },
    });
    if (isUserGoalExist) {
      await UserGoal.destroy({ where: { userId: id, goalId } });
      return successResponse(res, 204, 'Successfully de-selected this goal');
    }
    const userGoals = await UserGoal.create({ userId: id, goalId });
    return successResponse(res, 201, 'Successfully selected this goal', {
      userGoals,
    });
  } catch (err) {
    return serverError(res);
  }
};

/**
 * Get All Goals
 * @param {object} req
 * @param {object} res
 * @returns {object} goals Array
 */
export const getAllGoals = async (req, res) => {
  const goals = await Goal.findAll({
    include: [
      {
        model: Task,
        as: 'tasks',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    ],
  });
  return successResponse(res, 200, 'Successfully retrieved all goals', {
    goals,
  });
};
