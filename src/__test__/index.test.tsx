import { render, screen } from "@testing-library/react";
import Emoji from "../index";
describe("Emoji", () => {
  it("renders with no children", () => {
    render(<Emoji />);
    expect(screen.queryByRole("img")).toBeNull();
  });

  it(`renders with "string" child`, async () => {
    render(<Emoji>Hello World</Emoji>);

    expect(await screen.findByText("Hello World")).toMatchInlineSnapshot(`
      <div>
        Hello World
      </div>
    `);
  });

  it(`renders with "short code" child`, async () => {
    render(<Emoji>:smile:</Emoji>);

    expect(await screen.findByRole("img")).toMatchInlineSnapshot(`
      <img
        alt="😄"
        class="joypixels"
        src="https://cdn.jsdelivr.net/joypixels/assets/9.0/png/unicode/32/1f604.png"
        title=":smile:"
      />
    `);
  });

  it(`renders with "unicode" child`, async () => {
    render(<Emoji>😄</Emoji>);

    expect(await screen.findByRole("img")).toMatchInlineSnapshot(`
      <img
        alt="😄"
        class="joypixels"
        src="https://cdn.jsdelivr.net/joypixels/assets/9.0/png/unicode/32/1f604.png"
        title=":smile:"
      />
    `);
  });

  it(`renders with "text and short code" child`, async () => {
    render(<Emoji>Hello World :smile:</Emoji>);

    expect(await screen.findByText("Hello World")).toMatchInlineSnapshot(`
      <div>
        Hello World 
        <img
          alt="😄"
          class="joypixels"
          src="https://cdn.jsdelivr.net/joypixels/assets/9.0/png/unicode/32/1f604.png"
          title=":smile:"
        />
      </div>
    `);
  });

  it(`renders with "text and unicode" child`, async () => {
    render(<Emoji>Hello World 😄</Emoji>);

    expect(await screen.findByText("Hello World")).toMatchInlineSnapshot(`
      <div>
        Hello World 
        <img
          alt="😄"
          class="joypixels"
          src="https://cdn.jsdelivr.net/joypixels/assets/9.0/png/unicode/32/1f604.png"
          title=":smile:"
        />
      </div>
    `);
  });

  it(`renders with "short code and text" child`, async () => {
    render(<Emoji>:smile: Hello World</Emoji>);

    expect(await screen.findByText("Hello World")).toMatchInlineSnapshot(`
      <div>
        <img
          alt="😄"
          class="joypixels"
          src="https://cdn.jsdelivr.net/joypixels/assets/9.0/png/unicode/32/1f604.png"
          title=":smile:"
        />
         Hello World
      </div>
    `);
  });

  it(`renders with "unicode and text" child`, async () => {
    render(<Emoji>😄 Hello World</Emoji>);

    expect(await screen.findByText("Hello World")).toMatchInlineSnapshot(`
      <div>
        <img
          alt="😄"
          class="joypixels"
          src="https://cdn.jsdelivr.net/joypixels/assets/9.0/png/unicode/32/1f604.png"
          title=":smile:"
        />
         Hello World
      </div>
    `);
  });

  it(`renders with "short code and <i>text</i>" child`, async () => {
    render(
      <Emoji>
        :smile: <i>Hello World</i>
      </Emoji>
    );

    expect((await screen.findByText("Hello World")).parentElement)
      .toMatchInlineSnapshot(`
      <div>
        <img
          alt="😄"
          class="joypixels"
          src="https://cdn.jsdelivr.net/joypixels/assets/9.0/png/unicode/32/1f604.png"
          title=":smile:"
        />
         
        <i>
          Hello World
        </i>
      </div>
    `);
  });
});
