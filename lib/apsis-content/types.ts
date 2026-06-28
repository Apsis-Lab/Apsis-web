export type Locale = "en" | "zh";

export type MoatCard = {
  tag: string;
  title: string;
  body: string;
};

export type TerminalLine = {
  delay: number;
  prefix: string;
  text: string;
  accent: boolean;
};

export type VizAgent = {
  id: string;
  label: string;
  role: string;
};

export type ApsisContent = {
  nav: {
    stack: string;
    paradigm: string;
    evidence: string;
    earlyAccess: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    cta: string;
    ctaNote: string;
    emailSubject: string;
    viz: {
      title: string;
      colHypothesis: string;
      colBridge: string;
      colExecution: string;
      oodaHubLabel: string;
      colliderInput: string;
      agents: VizAgent[];
      bridgeLines: string[];
      scripts: string[];
      executionMode: string;
      executionSteps: string[];
      agentCFeedback: string;
      verdictLabel: string;
      verdict: string;
      verdictSub: string;
      verdictTag: string;
    };
  };
  moat: {
    tag: string;
    title: string;
    subtitle: string;
    cards: MoatCard[];
  };
  paradigm: {
    tag: string;
    title: string;
    paragraphs: string[];
    pullQuote: string;
    highlights: {
      stateful: string;
      multiStep: string;
      economicallyCoupled: string;
      physicalExecution: string;
    };
  };
  evidence: {
    tag: string;
    title: string;
    subtitle: string;
    sessionLabel: string;
    command: string;
    lines: TerminalLine[];
  };
  footer: {
    brand: string;
    copyright: string;
    contact: string;
    privacy: string;
  };
};
