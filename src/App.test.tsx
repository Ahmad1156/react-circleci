import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Ahmad shakik link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Ahmad shakik/i);
  expect(linkElement).toBeInTheDocument();
});
