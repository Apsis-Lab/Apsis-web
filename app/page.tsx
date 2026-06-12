import { EngineSection } from "@/components/landing/engine-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HypothesisSection } from "@/components/landing/hypothesis-section";
import { MoatSection } from "@/components/landing/moat-section";
import { NotSection } from "@/components/landing/not-section";
import { OperationsSection } from "@/components/landing/operations-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNav } from "@/components/landing/site-nav";
import { TechnologiesSection } from "@/components/landing/technologies-section";
import { TechnologyDetails } from "@/components/landing/technology-details";
import { LanguageProvider } from "@/lib/i18n/language-context";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="bg-institutional min-h-screen">
        <SiteNav />
        <HeroSection />
        <HypothesisSection />
        <EngineSection />
        <TechnologiesSection />
        <TechnologyDetails />
        <MoatSection />
        <OperationsSection />
        <NotSection />
        <SiteFooter />
      </main>
    </LanguageProvider>
  );
}
