import { useEffect, useState } from "react";
import { User, UserAddress } from "../interfaces";
import {
  UserCardWrapper,
  DisplayName,
  DisplayPicture,
  Email,
  SubSection,
  DetailsItem,
} from "../styles";

function formUserAddress(address: UserAddress) {
  return Object.values(address)
    .filter((item) => item !== "Address")
    .join(", ");
}

export default function UserCards(props: any) {
  const [pagedUsers, setPagedUsers] = useState<User[]>([]);
  useEffect(() => {
    setPagedUsers([...pagedUsers, ...props.users]);
  }, props.users);
  return (
    <>
      {pagedUsers.map((user: User) => (
        <UserCardWrapper key={user.email}>
          <DisplayPicture src={user.avatar} />
          <DisplayName>{user.name}</DisplayName>
          <Email>{user.email}</Email>
          <SubSection>
            <DetailsItem>{formUserAddress(user.address)}</DetailsItem>
            <DetailsItem>
              <a href="#">{user.website}</a>
            </DetailsItem>
          </SubSection>
        </UserCardWrapper>
      ))}
    </>
  );
}

UserCards.defaultProps = {
  users: [],
};
