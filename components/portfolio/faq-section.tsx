"use client";

import type { PortfolioProfile } from "@/types/portfolio";
import { trackEvent } from "@/lib/analytics";
import { useState } from "react";

export function FaqSection({ faqs }: { faqs: PortfolioProfile["faqs"] }) {
  const [openedFaqs, setOpenedFaqs] = useState<Set<string>>(new Set());

  const handleFaqToggle = (question: string, isOpen: boolean) => {
    if (isOpen && !openedFaqs.has(question)) {
      setOpenedFaqs((prev) => new Set(prev).add(question));
      trackEvent("faq_expand", {
        question: question,
      });
    }
  };

  return (
    <section id="faq" className="mt-20">
      <p className="text-sleek-secondary text-lg">FAQ</p>
      <h2 className="text-2xl font-semibold text-foreground [font-family:var(--profile-heading-font)]">Before We Start</h2>
      <div className="mt-6 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="rounded-md border border-dashed border-black/20 bg-black/[0.03] p-4 open:bg-black/[0.045] dark:border-border/70 dark:bg-card/70"
            onToggle={(e) => handleFaqToggle(item.question, (e.target as HTMLDetailsElement).open)}
          >
            <summary className="cursor-pointer text-sm font-semibold text-foreground">{item.question}</summary>
            <p className="text-sleek-secondary mt-2 text-sm">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
