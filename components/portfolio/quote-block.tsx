export function QuoteBlock({ text, author }: { text: string; author: string }) {
  return (
    <section className="mt-20">
      <blockquote className="text-sleek-secondary border-l-2 border-muted-foreground/55 pl-4 text-lg italic dark:border-muted-foreground/70">
        “{text}”
        <footer className="mt-2 text-sm not-italic text-foreground">— {author}</footer>
      </blockquote>
    </section>
  );
}
