import React from "react";
import { render } from "enzyme";

import Emoji from "../src/index";

describe("Emoji", () => {
  it("renders with no children", () => {
    const component = render(<Emoji />);

    expect(component.text()).toEqual("");
  });

  it(`renders with "string" child`, () => {
    const component = render(<Emoji>Hello World</Emoji>);

    expect(component.text()).toEqual("Hello World");
  });

  it(`renders with "short code" child`, () => {
    const component = render(<Emoji>:smile:</Emoji>);

    expect(component.is("img")).toEqual(true);
    expect(component.attr()).toEqual(
      expect.objectContaining({
        class: "joypixels",
        src:
          "https://cdn.jsdelivr.net/joypixels/assets/5.0/png/unicode/32/1f604.png",
        title: ":smile:",
        alt: "😄"
      })
    );
  });

  it(`renders with "unicode" child`, () => {
    const component = render(<Emoji>😄</Emoji>);

    expect(component.is("img")).toEqual(true);
    expect(component.attr()).toEqual(
      expect.objectContaining({
        class: "joypixels",
        alt: "😄",
        title: ":smile:",
        src:
          "https://cdn.jsdelivr.net/joypixels/assets/5.0/png/unicode/32/1f604.png"
      })
    );
  });

  it(`renders with "text and short code" child`, () => {
    const component = render(<Emoji>Hello World :smile:</Emoji>);

    expect(component.eq(0).text()).toEqual("Hello World ");
    expect(component.eq(1).attr()).toEqual(
      expect.objectContaining({
        class: "joypixels",
        src:
          "https://cdn.jsdelivr.net/joypixels/assets/5.0/png/unicode/32/1f604.png",
        title: ":smile:",
        alt: "😄"
      })
    );
  });

  it(`renders with "text and unicode" child`, () => {
    const component = render(<Emoji>Hello World 😄</Emoji>);

    expect(component.eq(0).text()).toEqual("Hello World ");
    expect(component.eq(1).attr()).toEqual(
      expect.objectContaining({
        class: "joypixels",
        src:
          "https://cdn.jsdelivr.net/joypixels/assets/5.0/png/unicode/32/1f604.png",
        title: ":smile:",
        alt: "😄"
      })
    );
  });

  it(`renders with "short code and text" child`, () => {
    const component = render(<Emoji>:smile: Hello World</Emoji>);

    expect(component.eq(1).text()).toEqual(" Hello World");
    expect(component.eq(0).attr()).toEqual(
      expect.objectContaining({
        class: "joypixels",
        src:
          "https://cdn.jsdelivr.net/joypixels/assets/5.0/png/unicode/32/1f604.png",
        title: ":smile:",
        alt: "😄"
      })
    );
  });

  it(`renders with "unicode and text" child`, () => {
    const component = render(<Emoji>😄 Hello World</Emoji>);

    expect(component.eq(1).text()).toEqual(" Hello World");
    expect(component.eq(0).attr()).toEqual(
      expect.objectContaining({
        class: "joypixels",
        src:
          "https://cdn.jsdelivr.net/joypixels/assets/5.0/png/unicode/32/1f604.png",
        title: ":smile:",
        alt: "😄"
      })
    );
  });

  it(`renders with "short code and <i>text</i>" child`, () => {
    const component = render(
      <Emoji>
        :smile: <i>Hello World</i>
      </Emoji>
    );

    expect(component.eq(0).attr()).toEqual(
      expect.objectContaining({
        class: "joypixels",
        src:
          "https://cdn.jsdelivr.net/joypixels/assets/5.0/png/unicode/32/1f604.png",
        title: ":smile:",
        alt: "😄"
      })
    );

    expect(component.eq(1).text()).toEqual(" ");
    expect(component.eq(2).text()).toEqual("Hello World");
  });
});
