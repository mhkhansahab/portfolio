"use client";

import { BiSend } from "react-icons/bi";
import { LuFileText } from "react-icons/lu";
import type { CtaButton } from "@/types/portfolio";
import { trackEvent } from "@/lib/analytics";

function ActionIcon({ icon }: { icon: string }) {
  if (icon.includes("FileText")) {
    return <LuFileText className="h-4 w-4" />;
  }
  return <BiSend className="h-4 w-4" />;
}

export function PrimaryActions({ buttons }: { buttons: CtaButton[] }) {
  const handleClick = (button: CtaButton) => {
    trackEvent("cta_click", {
      label: button.label,
      type: button.type,
      href: button.href,
    });
  };

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {buttons.map((button) => {
        const isPrimary = button.type === "primary";
        return (
          <a
            key={button.label}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(button)}
            className={[
              "inline-flex items-center gap-2 rounded-md border px-2 py-1 text-sm font-bold transition-all duration-300",
              isPrimary
                ? "border-foreground/20 bg-foreground text-background hover:opacity-90"
                : "btn-inner-shadow border-black/20 bg-background text-foreground hover:bg-accent dark:border-border/75",
            ].join(" ")}
          >
            <ActionIcon icon={button.icon} />
            <span>{button.label}</span>
          </a>
        );
      })}
    </div>
  );
}
