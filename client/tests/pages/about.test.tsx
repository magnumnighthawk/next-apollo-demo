import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import About from "../../pages/about";

describe("Homepage", () => {
  it("renders properly", async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <About />
      </MockedProvider>
    );
    expect(
      await screen.findByText("Karthick Ramakrishnan")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go back" })).toBeInTheDocument();
    expect(screen.getByText("Next.js GraphQL demo app")).toBeInTheDocument();
  });
});
