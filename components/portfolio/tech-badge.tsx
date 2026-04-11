"use client";

import Image from "next/image";
import { LuPuzzle } from "react-icons/lu";
import { SiClaude, SiGooglechrome, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiGooglegemini, SiAngular } from "react-icons/si";
import type { TechStackItem } from "@/types/portfolio";
import { trackEvent } from "@/lib/analytics";

function StackIcon({ iconName }: { iconName: string }) {
  const name = iconName.toLowerCase();
  const iconClass = "h-4 w-4 shrink-0";

  if (name.includes("typescript")) return <SiTypescript className={iconClass} />;
  if (name.includes("react")) return <SiReact className={iconClass} />;
  if (name.includes("angular")) return <SiAngular className={iconClass} />;
  if (name.includes("next")) return <SiNextdotjs className={iconClass} />;
  if (name.includes("postgres")) return <SiPostgresql className={iconClass} />;
  if (name.includes("node")) return <SiNodedotjs className={iconClass} />;
  if (name.includes("smyth")) {
    return <Image src="/brands/smythos-icon-primary.png" alt="" aria-hidden="true" width={16} height={16} className="h-4 w-4 shrink-0 object-contain" />;
  }
  if (name.includes("openai") || name.includes("llm")) return <SiOpenai className={iconClass} />;
  if (name.includes("claude")) return <SiClaude className={iconClass} />;
  if (name.includes("gemini")) return <SiGooglegemini className={iconClass} />;
  if (name.includes("extension")) return <LuPuzzle className={iconClass} />;
  if (name.includes("chrome")) return <SiGooglechrome className={iconClass} />;
  if (name.includes("tailwind")) return <SiTailwindcss className={iconClass} />;


  return <SiNodedotjs className={iconClass} />;
}

export function TechBadge({ item }: { item: TechStackItem }) {
  const handleClick = () => {
    trackEvent("skill_click", {
      skill_name: item.visibleName,
      tier: item.tier as string,
      icon: item.iconName,
    });
  };

  return (
    <span
      onClick={handleClick}
      className="skill-inner-shadow group inline-flex items-center self-end rounded-md border border-dashed border-black/20 bg-black/[0.04] px-3 py-1 text-sm font-bold text-foreground dark:border-border/85 dark:bg-accent/45 cursor-pointer hover:bg-accent transition-colors"
    >
      <StackIcon iconName={item.iconName} />
      <span className="ml-1">{item.visibleName}</span>
    </span>
  );
}
