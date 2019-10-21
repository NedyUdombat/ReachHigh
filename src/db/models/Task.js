export default (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      goalId: {
        type: DataTypes.INTEGER,
        field: 'goal_id',
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      duration: {
        type: DataTypes.INTEGER,
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
  Task.associate = models => {
    Task.belongsTo(models.Goal, {
      foreignKey: 'goalId',
      as: 'goal',
    });
    Task.hasMany(models.UserTask, {
      foreignKey: 'taskId',
      as: 'tasks',
    });
  };
  return Task;
};
