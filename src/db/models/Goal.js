export default (sequelize, DataTypes) => {
  const Goal = sequelize.define(
    'Goal',
    {
      title: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {},
  );
  Goal.associate = models => {
    Goal.hasMany(models.Task, {
      foreignKey: 'goalId',
      as: 'tasks',
    });
    Goal.belongsToMany(models.User, {
      foreignKey: 'goal_id',
      otherKey: 'user_id',
      through: 'UserGoals',
      as: 'userGoals',
    });
  };
  return Goal;
};
