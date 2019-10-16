export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Goals',
      [
        {
          id: 1,
          title: 'Be a better leader',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: 'Build my network',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: 'Get a promotion',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          title: 'Personal Growth',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Goals', null, {});
  },
};
