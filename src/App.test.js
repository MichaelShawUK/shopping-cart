import { render, screen } from "@testing-library/react";
import RouteSwitch from "./RouteSwitch.js";
import App from "./App";

test("renders nav", () => {
  render(<RouteSwitch />);
  const nav = screen.getByRole("navigation");
  expect(nav).toBeInTheDocument();
});

describe("App component", () => {
  it("matches snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
