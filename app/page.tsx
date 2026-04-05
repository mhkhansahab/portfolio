import { PortfolioPageShell } from "@/components/portfolio/portfolio-page-shell";
import { portfolioProfile } from "@/data/portfolio-profile";

export default function Home() {
  return (
    <PortfolioPageShell profile={portfolioProfile} />
  );
}
