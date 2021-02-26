import { gql, useQuery } from "@apollo/client";
import { User } from "../interfaces";

export const ALL_USERS_QUERY = gql`
  query getUsers {
    users {
      name
      email
      address {
        street
        suite
        city
      }
      phone
      website
    }
  }
`;

export default function NameComponent() {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);

  if (error) return <div>Error loading players.</div>;
  if (loading) return <div>Loading</div>;

  return (
    <>
      {data?.users.map((user: User) => (
        <p>{user.name}</p>
      ))}
    </>
  );
}
