import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Coins,
  Filter,
  GitBranch,
  Layers,
  Network,
} from "lucide-react";

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

export type LandingContent = {
  nav: {
    technologies: string;
    paradigm: string;
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
  technologies: {
    sectionTag: string;
    sectionMeta: string;
    title: string;
    description: string;
    readSpec: string;
    specSheet: string;
    specMeta: string;
    backToGrid: string;
    pipelineFlow: {
      title: string;
      trackA: string;
      trackB: string;
      python: string;
      rust: string;
      target: string;
      ingest: string;
      compile: string;
      atlas: string;
      whitebox: string;
      verify: string;
      irCompile: string;
      execute: string;
      staticReport: string;
      profitGate: string;
      vulnerable: string;
      reflect: string;
    };
    items: TechnologyContent[];
  };
  paradigm: {
    sectionTag: string;
    sectionMeta: string;
    title: string;
    blocks: { id: string; label: string; doctrine: string; text: string }[];
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

const technologyMeta = [
  { id: "tech-01", module: "MODULE_01", icon: GitBranch, span: "md:col-span-2 md:row-span-2" },
  { id: "tech-02", module: "MODULE_02", icon: Filter, span: "md:col-span-1" },
  { id: "tech-03", module: "MODULE_03", icon: Layers, span: "md:col-span-1" },
  { id: "tech-04", module: "MODULE_04", icon: Network, span: "md:col-span-1" },
  { id: "tech-05", module: "MODULE_05", icon: Coins, span: "md:col-span-1" },
  { id: "tech-06", module: "MODULE_06", icon: Boxes, span: "md:col-span-2" },
] as const;

const enTechnologies: Omit<TechnologyContent, "icon" | "span">[] = [
  {
    id: "tech-01",
    module: "MODULE_01",
    title: "Dual-Track Neuro-Symbolic Exploit Intelligence",
    shortTitle: "Dual-Track Intelligence",
    paragraphs: [
      "VibeSec operates through a dual-track security architecture: one track performs source-grounded whitebox reasoning to identify high-confidence logic flaws, while the second conducts live adversarial simulation against executable protocol state. The result is a security workflow that separates theoretical weakness from operational exploitability, producing both human-readable audit intelligence and machine-verified attack evidence.",
      "This architecture eliminates the false dichotomy between static analysis and dynamic testing. VibeSec reasons like a senior auditor, attacks like an adversary, and refuses to promote claims that cannot survive verification.",
    ],
  },
  {
    id: "tech-02",
    module: "MODULE_02",
    title: "Deterministic Invariant Filtering And Mathematical Tautology Suppression",
    shortTitle: "Invariant Filtering",
    paragraphs: [
      "The engine applies concolic-grade invariant gates to prevent meaningless assertions from contaminating the exploit pipeline. Trivial predicates, vacuous post-conditions, and mathematically inevitable claims are rejected before they can become false evidence.",
      "This gives VibeSec a hard epistemic boundary: an exploit must violate a meaningful security property, not merely satisfy a statement that was already true in every possible state. It is a mathematical immune system against low-signal automation.",
    ],
  },
  {
    id: "tech-03",
    module: "MODULE_03",
    title: "JIT State Morphing And Logit-Level Hallucination Suppression",
    shortTitle: "JIT State Morphing",
    paragraphs: [
      "VibeSec dynamically anchors its reasoning surface to the live deployment environment, transforming real protocol state into strict machine constraints before agents are allowed to act. Addresses, assets, roles, and execution targets are converted into deterministic action boundaries, physically preventing the system from inventing non-existent counterparties or phantom contracts.",
      "This is hallucination suppression at the decision boundary, not cleanup after the fact. The model is not asked to remember reality; it is caged inside it.",
    ],
  },
  {
    id: "tech-04",
    module: "MODULE_04",
    title: "Quantum-Inspired State Exploration And MCTS Time-Travel",
    shortTitle: "MCTS Exploration",
    paragraphs: [
      "When an adversarial path dead-ends, VibeSec does not blindly retry the same failed route. It performs non-linear attack routing, rewinds the logical search frontier, and branches into alternate exploit trajectories using Monte Carlo Tree Search-style state exploration.",
      "This gives the engine adversarial persistence without transcript decay. It can pursue multi-step exploit chains, abandon poisoned branches, and continue exploring the protocol's attack surface as a living search tree rather than a linear prompt session.",
    ],
  },
  {
    id: "tech-05",
    module: "MODULE_05",
    title: "Auto-Materialized Liquidity And Insider-Threat Emulation",
    shortTitle: "Liquidity Emulation",
    paragraphs: [
      "VibeSec can emulate economically powerful attackers, privileged users, and insider-threat conditions without waiting for fragile external setup. It materializes liquidity, authorizes simulated actors, and stress-tests the protocol's core mathematics under conditions that resemble worst-case adversarial capability.",
      "This is critical because many catastrophic vulnerabilities are not visible from the perspective of an unfunded public address. VibeSec asks the harder question: if capital, timing, and legitimate permissions are no longer limiting factors, does the protocol's accounting still hold?",
    ],
  },
  {
    id: "tech-06",
    module: "MODULE_06",
    title: "Distributed Battlefield Allocation And Swarm Intelligence Coverage",
    shortTitle: "Swarm Coverage",
    paragraphs: [
      "Large protocols are not audited as a single monolith. VibeSec partitions the deployed system into distinct operational battlefields and assigns specialized autonomous agents to attack separate regions of the protocol in parallel.",
      "This creates coverage without redundant agent collisions. Instead of five analysts staring at the same vault, VibeSec distributes attention across the entire deployment graph, increasing surface-area saturation while preserving adversarial depth.",
    ],
  },
];

const zhTechnologies: Omit<TechnologyContent, "icon" | "span">[] = [
  {
    id: "tech-01",
    module: "MODULE_01",
    title: "双轨神经符号漏洞智能",
    shortTitle: "双轨智能",
    paragraphs: [
      "VibeSec 采用双轨安全架构：一轨执行源码级白盒推理，识别高置信度逻辑缺陷；另一轨对可执行协议状态进行实时对抗模拟。由此形成将理论弱点与实战可利用性分离的安全工作流，同时产出人类可读的审计情报与机器验证的攻击证据。",
      "该架构消除了静态分析与动态测试之间的虚假对立。VibeSec 像资深审计师一样推理，像攻击者一样出击，拒绝推广任何无法通过验证的断言。",
    ],
  },
  {
    id: "tech-02",
    module: "MODULE_02",
    title: "确定性不变量过滤与数学同语反复抑制",
    shortTitle: "不变量过滤",
    paragraphs: [
      "引擎应用共轭级不变量门控，防止无意义断言污染漏洞流水线。平凡谓词、空洞后置条件与数学上必然成立的声明，在成为虚假证据之前即被驳回。",
      "这为 VibeSec 划定了严格的认知边界：漏洞必须违反有意义的安全属性，而非仅仅满足一个在一切状态下本就成立的陈述。它是抵御低信号自动化的数学免疫系统。",
    ],
  },
  {
    id: "tech-03",
    module: "MODULE_03",
    title: "JIT 状态变形与 Logit 级幻觉抑制",
    shortTitle: "JIT 状态变形",
    paragraphs: [
      "VibeSec 将推理面动态锚定至线上部署环境，在智能体行动前将真实协议状态转化为严格机器约束。地址、资产、角色与执行目标被转换为确定性行动边界，从物理层面阻止系统虚构不存在的对手方或幽灵合约。",
      "这是决策边界上的幻觉抑制，而非事后清理。模型不被要求记住现实——它被囚禁在现实之中。",
    ],
  },
  {
    id: "tech-04",
    module: "MODULE_04",
    title: "量子启发状态探索与 MCTS 时间回溯",
    shortTitle: "MCTS 探索",
    paragraphs: [
      "当对抗路径走入死胡同时，VibeSec 不会盲目重试同一条失败路线。它执行非线性攻击路由，回退逻辑搜索前沿，并通过蒙特卡洛树搜索式状态探索分支至替代漏洞轨迹。",
      "这使引擎具备无对话衰减的对抗韧性。它能追踪多步漏洞链、舍弃污染分支，并将协议攻击面作为活搜索树持续探索，而非线性 Prompt 会话。",
    ],
  },
  {
    id: "tech-05",
    module: "MODULE_05",
    title: "自动物化流动性与内部威胁仿真",
    shortTitle: "流动性仿真",
    paragraphs: [
      "VibeSec 可仿真经济实力雄厚的攻击者、特权用户与内部威胁条件，无需等待脆弱的外部搭建。它物化流动性、授权仿真角色，并在接近最坏情况对抗能力的条件下压力测试协议核心数学。",
      "这至关重要——许多灾难性漏洞从无资金公共地址的视角不可见。VibeSec 提出更尖锐的问题：当资本、时序与合法权限不再构成限制，协议的会计体系是否依然成立？",
    ],
  },
  {
    id: "tech-06",
    module: "MODULE_06",
    title: "分布式战场分配与蜂群智能覆盖",
    shortTitle: "蜂群覆盖",
    paragraphs: [
      "大型协议不会被作为单一整体审计。VibeSec 将已部署系统划分为独立作战战场，并指派专业化自主智能体并行攻击协议的不同区域。",
      "由此实现无冗余智能体碰撞的覆盖。与其让五名分析师盯着同一金库，VibeSec 将注意力分布至整个部署图，在保持对抗深度的同时提升表面饱和率。",
    ],
  },
];

function mergeTechnologies(
  items: Omit<TechnologyContent, "icon" | "span">[],
): TechnologyContent[] {
  return items.map((item, index) => ({
    ...item,
    icon: technologyMeta[index].icon,
    span: technologyMeta[index].span,
  }));
}

export const content: Record<Locale, LandingContent> = {
  en: {
    nav: {
      technologies: "Technologies",
      paradigm: "Paradigm",
      contact: "Contact",
      access: "Access",
    },
    hero: {
      sysInit: "SYS_INIT",
      operational: "OPERATIONAL",
      moduleLabel: "MODULE_00",
      entryPoint: "HERO / ENTRY_POINT",
      titleLines: [
        "Autonomous",
        "Exploit Generation",
        "For The Age Of",
        "Machine-Speed Adversaries",
      ],
      titleHighlightIndex: 0,
      paragraph1:
        "VibeSec is a state-aware, neuro-symbolic security platform that does not merely scan contracts. It models protocol economics, simulates adversarial intent, verifies source-level logic, and detonates attack paths against realistic execution conditions until weak assumptions collapse into measurable evidence.",
      paragraph2:
        "This is not another alert engine. It is an autonomous offensive research system designed to compress weeks of manual threat modeling, exploit ideation, scenario branching, and invariant validation into an industrialized security loop.",
      paragraph3:
        "VibeSec turns protocol security from artisanal review into deterministic adversarial infrastructure.",
      ctaPrimary: "Request Access",
      ctaSecondary: "View Technologies",
      status: [
        { label: "MODE", value: "ADVERSARIAL" },
        { label: "VERIFY", value: "DETERMINISTIC" },
        { label: "SURFACE", value: "STATE-AWARE" },
      ],
      visual: {
        blockLabel: "MAINNET_FORK",
        contractLabel: "TARGET_CONTRACT",
        staticTrack: "STATIC / WHITEBOX",
        dynamicTrack: "DYNAMIC / ADVERSARIAL",
        forkExec: "revm parallel exec",
        profitGate: "profit_positive?",
        verdict: "→ VULNERABLE",
        caption:
          "Dual-track verification: source logic audit + forked on-chain execution, confirmed only by measurable profit.",
      },
    },
    technologies: {
      sectionTag: "SECTION_01",
      sectionMeta: "CORE_TECH / MOAT",
      title: "Core Technologies",
      description:
        "The Moat — six autonomous capabilities that define VibeSec's adversarial infrastructure. Select any module for full specification.",
      readSpec: "Read Spec",
      specSheet: "SPEC_SHEET",
      specMeta: "FULL_MODULE_DOCUMENTATION",
      backToGrid: "Back to Grid",
      pipelineFlow: {
        title: "DUAL-TRACK PIPELINE",
        trackA: "TRACK_A",
        trackB: "TRACK_B",
        python: "PYTHON",
        rust: "RUST",
        target: "TARGET",
        ingest: "M1 INGEST",
        compile: "M2 COMPILE",
        atlas: "M3 ATLAS",
        whitebox: "M3.5 WHITEBOX",
        verify: "M4 VERIFY",
        irCompile: "M5 IR",
        execute: "M6 EXEC",
        staticReport: "STATIC REPORT",
        profitGate: "profit_positive?",
        vulnerable: "VULNERABLE",
        reflect: "REFLECT → M4",
      },
      items: mergeTechnologies(enTechnologies),
    },
    paradigm: {
      sectionTag: "SECTION_02",
      sectionMeta: "PARADIGM / DOCTRINE",
      title: "The Paradigm Shift",
      blocks: [
        {
          id: "paradigm-01",
          label: "COLLAPSE",
          doctrine: "VIBESEC_DOCTRINE_01",
          text: "Traditional static analysis reports what code appears to do. Manual auditing depends on scarce human intuition, uneven coverage, and time-boxed attention. Conventional fuzzing mutates inputs without understanding economic intent. VibeSec collapses these categories into a single autonomous adversarial system: source-grounded reasoning, mathematical invariant discipline, live environment anchoring, non-linear exploit search, and state-aware attack simulation.",
        },
        {
          id: "paradigm-02",
          label: "SHIFT",
          doctrine: "VIBESEC_DOCTRINE_02",
          text: 'The old model asks, "Did someone notice the bug?" VibeSec asks, "Can an autonomous adversary prove the protocol breaks under physically realistic conditions?" That shift is not incremental. It is the transition from review to weaponized verification, from screenshots to evidence, from audit labor to security infrastructure.',
        },
        {
          id: "paradigm-03",
          label: "MANDATE",
          doctrine: "VIBESEC_DOCTRINE_03",
          text: "Protocols do not need more alerts. They need a machine that thinks in incentives, moves through state, and refuses to believe anything until reality confirms it.",
        },
      ],
    },
    footer: {
      contactTag: "CONTACT",
      titleLines: ["Security infrastructure,", "not audit labor."],
      description:
        "VibeSec turns protocol security from artisanal review into deterministic adversarial infrastructure. Request access to deploy autonomous exploit generation against your protocol surface.",
      email: "Email",
      twitter: "X · @StevenJ_Sec",
      brandLine: "VIBESEC",
      tagline: "AUTONOMOUS · DETERMINISTIC · STATE-AWARE",
    },
  },
  zh: {
    nav: {
      technologies: "核心技术",
      paradigm: "范式转变",
      contact: "联系",
      access: "申请接入",
    },
    hero: {
      sysInit: "系统初始化",
      operational: "运行中",
      moduleLabel: "模块_00",
      entryPoint: "首屏 / 入口",
      titleLines: [
        "自主",
        "漏洞生成",
        "面向",
        "机器速度对手的时代",
      ],
      titleHighlightIndex: 0,
      paragraph1:
        "VibeSec 是一款状态感知、神经符号融合的安全平台，不止于扫描合约。它建模协议经济学、模拟对抗意图、验证源码级逻辑，并在真实执行条件下引爆攻击路径，直至脆弱假设坍缩为可度量证据。",
      paragraph2:
        "这不是又一则告警引擎。它是一个自主攻击性研究系统，旨在将数周的人工威胁建模、漏洞构思、场景分支与不变量验证，压缩进工业级安全闭环。",
      paragraph3:
        "VibeSec 将协议安全从手工式审计，转化为确定性对抗基础设施。",
      ctaPrimary: "申请接入",
      ctaSecondary: "查看核心技术",
      status: [
        { label: "模式", value: "对抗式" },
        { label: "验证", value: "确定性" },
        { label: "表面", value: "状态感知" },
      ],
      visual: {
        blockLabel: "主网分叉",
        contractLabel: "目标合约",
        staticTrack: "静态 / 白盒审计",
        dynamicTrack: "动态 / 对抗仿真",
        forkExec: "revm 并行执行",
        profitGate: "profit_positive?",
        verdict: "→ 漏洞确认",
        caption:
          "双轨验证架构：源码逻辑审计 + 链上分叉实战执行，仅以可度量利润作为最终裁决。",
      },
    },
    technologies: {
      sectionTag: "章节_01",
      sectionMeta: "核心技术 / 护城河",
      title: "核心技术",
      description:
        "护城河 — 定义 VibeSec 对抗基础设施的六项自主能力。选择任一模块查看完整规格。",
      readSpec: "阅读规格",
      specSheet: "规格文档",
      specMeta: "完整模块说明",
      backToGrid: "返回概览",
      pipelineFlow: {
        title: "双轨流水线",
        trackA: "轨道_A",
        trackB: "轨道_B",
        python: "PYTHON",
        rust: "RUST",
        target: "目标输入",
        ingest: "M1 摄取",
        compile: "M2 编译",
        atlas: "M3 图谱",
        whitebox: "M3.5 白盒",
        verify: "M4 验证",
        irCompile: "M5 IR",
        execute: "M6 执行",
        staticReport: "静态报告",
        profitGate: "profit_positive?",
        vulnerable: "漏洞确认",
        reflect: "反馈 → M4",
      },
      items: mergeTechnologies(zhTechnologies),
    },
    paradigm: {
      sectionTag: "章节_02",
      sectionMeta: "范式 / 准则",
      title: "范式转变",
      blocks: [
        {
          id: "paradigm-01",
          label: "融合",
          doctrine: "VIBESEC_准则_01",
          text: "传统静态分析报告的是代码表面在做什么。人工审计依赖稀缺的人类直觉、不均等的覆盖与时间盒式注意力。常规模糊测试变异输入却不理解经济意图。VibeSec 将这些类别坍缩为单一自主对抗系统：源码锚定推理、数学不变量纪律、线上环境锚定、非线性漏洞搜索与状态感知攻击仿真。",
        },
        {
          id: "paradigm-02",
          label: "转变",
          doctrine: "VIBESEC_准则_02",
          text: "旧模型问的是：「是否有人注意到了这个 Bug？」VibeSec 问的是：「自主对抗者能否在物理真实的条件下证明协议会崩溃？」这一转变并非渐进式改良，而是从审查到武器化验证、从截图到证据、从审计劳力到安全基础设施的跨越。",
        },
        {
          id: "paradigm-03",
          label: "使命",
          doctrine: "VIBESEC_准则_03",
          text: "协议不需要更多告警。它们需要一台以激励为思维、以状态为行动、且拒绝相信任何事物——除非现实予以确认——的机器。",
        },
      ],
    },
    footer: {
      contactTag: "联系",
      titleLines: ["安全基础设施，", "而非审计劳力。"],
      description:
        "VibeSec 将协议安全从手工式审计转化为确定性对抗基础设施。申请接入，对你的协议表面部署自主漏洞生成能力。",
      email: "邮件",
      twitter: "X · @StevenJ_Sec",
      brandLine: "VIBESEC",
      tagline: "自主 · 确定性 · 状态感知",
    },
  },
};
