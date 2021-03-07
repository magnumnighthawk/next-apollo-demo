import { ALL_USERS_QUERY } from "lib/queries";

export const apolloGetUsers: any[] = [
  {
    request: {
      query: ALL_USERS_QUERY,
    },
    result: {
      data: {
        users: [
          {
            name: "Courtney Lang",
            email: "Conrad37@yahoo.com",
            address: {
              street: "Fatima Walks",
              suite: "Suite 567",
              city: "South Lauryfort",
              zipcode: "81604-3906",
              __typename: "Address",
            },
            phone: "(473) 969-6723 x154",
            website: "sam.biz",
            avatar: "http://placeimg.com/640/480/city",
            __typename: "User",
          },
        ],
      },
    },
  },
];
