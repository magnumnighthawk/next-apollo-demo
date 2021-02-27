import { gql } from "@apollo/client";

export const ALL_USERS_QUERY = gql`
  query getUsers {
    users {
      name
      email
      address {
        street
        suite
        city
        zipcode
      }
      phone
      website
      avatar
    }
  }
`;
