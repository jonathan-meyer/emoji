import React from "react";
import { toImage } from "emoji-toolkit";
import cheerio from "cheerio";

const childrenToImage = children => {
  let components = [];

  if (Array.isArray(children)) {
    components.push(children.map(child => childrenToImage(child)));
  } else if (typeof children === "object") {
    components.push(childrenToImage(children.props.children));
  } else if (typeof children === "string") {
    const html = toImage(children);
    const $ = cheerio.load(html);

    $("body")
      .contents()
      .each(function(key) {
        if ($(this).hasClass("joypixels")) {
          const img = $(this);

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
          components.push(<span key={key}>{$(this).text()}</span>);
        }
      });
  }

  return components;
};

class Emoji extends React.Component {
  render() {
    const { children } = this.props;
    return <>{childrenToImage(children)}</>;
  }
}

export default Emoji;
