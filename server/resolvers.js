const faker = require("faker");

module.exports = {
  Query: {
    users: () =>
      new Array(10).fill(null).map(() => ({
        ...faker.helpers.userCard(),
        avatar: faker.random.image(),
      })),
  },
};
