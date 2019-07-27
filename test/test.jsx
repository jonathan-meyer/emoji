import React from "react";
import { shallow, mount } from "enzyme";

import Emoji from "../src/index";

describe("Emoji", () => {
  it("renders with no children", () => {
    const component = shallow(<Emoji />);
    expect(component.exists()).toEqual(true);
  });

  it(`renders with "string" child`, () => {
    const component = shallow(<Emoji>Hello World</Emoji>);
    expect(component.exists()).toEqual(true);
  });

  it(`renders with "short code" child`, () => {
    const component = shallow(<Emoji>:smile:</Emoji>);
    expect(component.exists()).toEqual(true);
  });

  it(`renders with "unicode" child`, () => {
    const component = shallow(<Emoji>😁️</Emoji>);
    expect(component.exists()).toEqual(true);
  });
});
