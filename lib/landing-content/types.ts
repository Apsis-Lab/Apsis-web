import type { LucideIcon } from "lucide-react";

export const BRAND_NAME = "VibeSec";

export type Locale = "en" | "zh";

export type TechnologyContent = {
  id: string;
  module: string;
  title: string;
  shortTitle: string;
  paragraphs: string[];
  icon: LucideIcon;
  span: string;
};

export type ContentBlock = {
  id: string;
  label: string;
  doctrine: string;
  text: string;
};

export type OperationItem = {
  title: string;
  text: string;
};

export type MoatPillar = {
  title: string;
  text: string;
};

export type LandingContent = {
  nav: {
    engine: string;
    technologies: string;
    moat: string;
    operations: string;
    contact: string;
    access: string;
  };
  hero: {
    sysInit: string;
    operational: string;
    moduleLabel: string;
    entryPoint: string;
    titleLines: string[];
    titleHighlightIndex: number;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    ctaPrimary: string;
    ctaSecondary: string;
    status: { label: string; value: string }[];
    visual: {
      blockLabel: string;
      contractLabel: string;
      staticTrack: string;
      dynamicTrack: string;
      forkExec: string;
      profitGate: string;
      verdict: string;
      caption: string;
    };
  };
  hypothesis: {
    sectionTag: string;
    sectionMeta: string;
    title: string;
    paragraphs: string[];
  };
  engine: {
    sectionTag: string;
    sectionMeta: string;
    title: string;
    intro: string;
    semanticTitle: string;
    semanticBody: string;
    executionTitle: string;
    executionBody: string;
    boundary: string;
    rule: string;
  };
  technologies: {
    sectionTag: string;
    sectionMeta: string;
    title: string;
    description: string;
    readSpec: string;
    specSheet: string;
    specMeta: string;
    backToGrid: string;
    items: TechnologyContent[];
  };
  moat: {
    sectionTag: string;
    sectionMeta: string;
    title: string;
    intro: string;
    pillars: MoatPillar[];
    closing: string[];
  };
  operations: {
    sectionTag: string;
    sectionMeta: string;
    title: string;
    items: OperationItem[];
  };
  notSection: {
    sectionTag: string;
    sectionMeta: string;
    title: string;
    paragraphs: string[];
    closing: string[];
  };
  footer: {
    contactTag: string;
    titleLines: string[];
    description: string;
    email: string;
    twitter: string;
    brandLine: string;
    tagline: string;
  };
};
