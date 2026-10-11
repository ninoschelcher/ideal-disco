import Markdoc, { type RenderableTreeNode } from "@markdoc/markdoc";
import React from "react";

type MarkdocContentProps = {
  content: RenderableTreeNode;
};

export function MarkdocContent({ content }: MarkdocContentProps) {
  return (
    <div className="content">{Markdoc.renderers.react(content, React)}</div>
  );
}
