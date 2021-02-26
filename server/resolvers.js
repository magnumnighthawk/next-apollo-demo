const faker = require("faker");

module.exports = {
  Query: {
    users: () => {
      return new Array(10).fill(null).map(() => {
        return faker.helpers.userCard();
      });
    },
  },
};
