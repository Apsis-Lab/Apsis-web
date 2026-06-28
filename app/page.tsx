import { ApsisNav } from "@/components/apsis/nav";
import { ApsisHero } from "@/components/apsis/hero";
import { MoatBento } from "@/components/apsis/moat-bento";
import { ParadigmSection } from "@/components/apsis/paradigm";
import { EvidenceTerminal } from "@/components/apsis/evidence-terminal";
import { ApsisFooter } from "@/components/apsis/footer";

export default function Home() {
  return (
    <>
      <ApsisNav />
      <main>
        <ApsisHero />
        <MoatBento />
        <ParadigmSection />
        <EvidenceTerminal />
      </main>
      <ApsisFooter />
    </>
  );
}
