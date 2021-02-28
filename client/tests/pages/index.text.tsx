import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Homepage from "../../pages/index";
import { apolloGetUsers as mockUsers } from "../../mock-data";

describe("Homepage", () => {
  it("renders properly", async () => {
    render(
      <MockedProvider mocks={mockUsers} addTypename={false}>
        <Homepage />
      </MockedProvider>
    );
    expect(await screen.findByText("Welcome!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "I have a infinite list of users queried using GraphQL and faker"
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Load more" })).toBeInTheDocument();
  });
});
