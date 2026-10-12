type ParagraphsProps = { text: string; className?: string };

/** Splits multiline CMS text into paragraphs on blank lines. */
export function Paragraphs({ text, className }: ParagraphsProps) {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph, index) => (
      <p key={index} className={className}>
        {paragraph}
      </p>
    ));
}
