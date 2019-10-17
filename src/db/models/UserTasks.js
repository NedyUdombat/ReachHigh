export default (sequelize, DataTypes) => {
  const UserTask = sequelize.define(
    'UserTask',
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
      },
      taskId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'task_id',
        onDelete: 'CASCADE',
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
  UserTask.associate = models => {};
  return UserTask;
};
