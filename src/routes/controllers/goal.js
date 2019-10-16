import {
  successResponse,
  serverError,
  errorResponse,
} from '../../utils/helpers';
import models from '../../db/models';

const { Goal, UserGoal } = models;

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
