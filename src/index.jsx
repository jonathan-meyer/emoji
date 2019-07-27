import React from "react";
import { toImage } from "emoji-toolkit";

const childrenToImage = children => {
  if (Array.isArray(children)) {
    return children.map(child => childrenToImage(child)).join("\n");
  }

  if (typeof children === "object") {
    return toImage(children.props.children);
  }

  if (typeof children === "string") {
    return toImage(children);
  }
};

class Emoji extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <span dangerouslySetInnerHTML={{ __html: childrenToImage(children) }} />
    );
  }
}

export default Emoji;
