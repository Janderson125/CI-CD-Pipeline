import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders main header", () => {
  render(<App />);
  expect(screen.getByText(/My E-Commerce Store/i)).toBeInTheDocument();
});
