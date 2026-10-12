type HighlightedTextProps = { text: string; highlight: string };

/** Renders `text`, with the first occurrence of `highlight` in rust italics. */
export function HighlightedText({ text, highlight }: HighlightedTextProps) {
  const index = highlight ? text.indexOf(highlight) : -1;

  if (index === -1) {
    return text;
  }

  return (
    <>
      {text.slice(0, index)}
      <em className="text-rust">{highlight}</em>
      {text.slice(index + highlight.length)}
    </>
  );
}
