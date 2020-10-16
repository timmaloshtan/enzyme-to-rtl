import React from "react";
import { mount } from "enzyme";

import Collapse from "./index";

test("setOpenIndex sets the open index state properly", () => {
  const wrapper = mount(<Collapse items={[]} />);
  expect(wrapper.state("openIndex")).toBe(0);
  wrapper.instance().setOpenIndex(1);
  expect(wrapper.state("openIndex")).toBe(1);
});

test("Collapse renders CollapseText with the item contents", () => {
  const snacks = {
    title: "Favorite Snacks",
    contents: "Sunflower seeds are great"
  };
  const drinks = {
    title: "Favorite Drinks",
    contents: "Green tea rocks"
  };
  const wrapper = mount(<Collapse items={[snacks, drinks]} />);
  expect(wrapper.find("CollapseText").props().children).toBe(snacks.contents);
});
