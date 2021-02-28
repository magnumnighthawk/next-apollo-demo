import { render, screen } from "@testing-library/react";
import HeroCard from "../../components/HeroCard";

describe("HeroCard", () => {
  it("renders properly", () => {
    render(<HeroCard />);
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "I have a infinite list of users queried using GraphQL and faker"
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
