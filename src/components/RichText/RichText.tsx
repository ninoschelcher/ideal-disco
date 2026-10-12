import Markdoc, { type RenderableTreeNode } from "@markdoc/markdoc";
import React from "react";

type RichTextProps = {
  content: RenderableTreeNode;
};

export function RichText({ content }: RichTextProps) {
  return (
    <div className="content">{Markdoc.renderers.react(content, React)}</div>
  );
}
