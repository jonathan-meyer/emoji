import * as cheerio from "cheerio";
import joypixels from "emoji-toolkit";
import React, {
  useCallback,
  useEffect,
  useState,
  type FragmentProps,
  type ReactNode,
} from "react";

export interface EmojiProps {
  children?: ReactNode;
}

joypixels.init();

const Emoji = ({ children }: EmojiProps) => {
  const textToImage = useCallback(
    (text: string) =>
      new Promise<string>((resolve, reject) => {
        try {
          const html = joypixels.toImage(text);
          resolve(html);
        } catch (err: any) {
          reject(err);
        }
      }),
    []
  );

  const parse = useCallback(
    async (children: ReactNode): Promise<ReactNode> =>
      React.Children.map(children, async (child) => {
        if (React.isValidElement<FragmentProps>(child)) {
          return React.cloneElement(child, {
            children: React.Children.map(
              child.props.children,
              async (c) => await parse(c)
            ),
          });
        }

        if (typeof child === "string") {
          const html = await textToImage(child);
          const components: ReactNode[] = [];
          const $ = cheerio.load(html);

          $("body")
            .contents()
            .each(function (key, el) {
              if ($(el).hasClass("joypixels")) {
                const img = $(el);
                components.push(
                  <img
                    key={key}
                    className="joypixels"
                    alt={img.attr("alt")}
                    title={img.attr("title")}
                    src={img.attr("src")}
                  />
                );
              } else {
                components.push($(el).text());
              }
            });

          return components;
        }

        return child;
      }),
    [textToImage]
  );

  const [parsed, setParsed] = useState<ReactNode>();

  useEffect(() => {
    parse(children)
      .then(setParsed)
      .catch((err) =>
        setParsed(
          <>
            Error: <pre>{JSON.stringify(err)}</pre>
          </>
        )
      );
  }, [children, parse]);

  return parsed;
};

export default Emoji;
