// Emits a JSON-LD <script> block. Server-rendered so crawlers see it in the
// initial HTML. Callers pass a plain schema.org object.

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Data is authored in this codebase, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Build a FAQPage schema from the same Q&A array the visible FAQ renders, so the
// structured data and the page never drift apart.
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
