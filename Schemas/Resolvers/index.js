const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
    greet: (parent, args) => {
      console.log(args);
      return `Good Morning, ${args.name}!`;
    },
    getUserList: () => {
      // exec db query here
      const users = [
        {
          id: 1,
          name: "Arun",
          phone: "4242"
        },
        {
          id: 2,
          name: "John",
          phone: "234234"
        }
      ]
      return users;
    }
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = {
        id: 999,
        name: args.name,
        phone: args.phone
      }
      return user;
    }
  }
}

module.exports = resolvers;