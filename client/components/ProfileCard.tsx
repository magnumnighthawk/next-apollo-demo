import Link from "next/link";
import {
  HeroCardWrapper,
  HeroCardTitle,
  ProfileDescription,
  ProfilePicture,
  Button,
} from "../styles";

export default function ProfileCard() {
  return (
    <HeroCardWrapper>
      <ProfilePicture src="/profile.jpg" />
      <HeroCardTitle>Karthick Ramakrishnan</HeroCardTitle>
      <ProfileDescription>
        ReactJS enthusiast. Have worked on NextJS, Node.js, Typescript, GraphQL,
        Webpack etc.
      </ProfileDescription>
      <ProfileDescription>
        Like to explore the latest JS frameworks and libraries. Know a bit of
        full-stack and cloud too
      </ProfileDescription>

      <Link href="/">
        <Button>Go back</Button>
      </Link>
    </HeroCardWrapper>
  );
}
