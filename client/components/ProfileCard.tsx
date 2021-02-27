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
        Senior frontend developer at TCS. Proficient in Web development. ReactJS
        enthusiast. Have worked on NextJS, Node.js, Typescript, GraphQL, Webpack
        etc.
      </ProfileDescription>

      <Link href="/">
        <Button>Go back</Button>
      </Link>
    </HeroCardWrapper>
  );
}
