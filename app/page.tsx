import { HeroSection } from "@/components/landing/hero-section";
import { ParadigmSection } from "@/components/landing/paradigm-section";
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
        <TechnologiesSection />
        <TechnologyDetails />
        <ParadigmSection />
        <SiteFooter />
      </main>
    </LanguageProvider>
  );
}
