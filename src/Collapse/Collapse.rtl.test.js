import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Collapse from "./index";
it("can open accordion items to see the contents", () => {
  const snacks = {
    title: "Favorite Snacks",
    contents: "Sunflower seeds are great"
  };
  const drinks = {
    title: "Favorite Drinks",
    contents: "Green tea rocks"
  };
  render(<Collapse items={[snacks, drinks]} />);
  expect(screen.getByText(snacks.contents)).toBeInTheDocument();
  expect(screen.queryByText(drinks.contents)).not.toBeInTheDocument();
  userEvent.click(screen.getByText(drinks.title));
  expect(screen.getByText(drinks.contents)).toBeInTheDocument();
  expect(screen.queryByText(snacks.contents)).not.toBeInTheDocument();
});
