export default (sequelize, DataTypes) => {
  const UserGoal = sequelize.define(
    'UserGoal',
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
      },
      goalId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'goal_id',
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
  UserGoal.associate = models => {};
  return UserGoal;
};
