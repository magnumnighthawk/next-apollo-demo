import Link from "next/link";
import {
  HeroCardWrapper,
  HeroCardTitle,
  HeroCardDescription,
  Button,
} from "styles";

export default function HeroCard() {
  return (
    <HeroCardWrapper>
      <HeroCardTitle>Welcome!</HeroCardTitle>
      <HeroCardDescription>
        I have a infinite list of users queried using GraphQL and faker
      </HeroCardDescription>

      <Link href="/about">
        <Button>About</Button>
      </Link>
    </HeroCardWrapper>
  );
}
