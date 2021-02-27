const faker = require("faker");

module.exports = {
  Query: {
    users: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const users = new Array(10).fill(null).map(() => ({
            ...faker.helpers.userCard(),
            avatar: faker.random.image(),
          }));
          resolve(users);
        }, 2000);
      });
    },
  },
};
