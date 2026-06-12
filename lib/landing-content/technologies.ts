import {
  BookOpen,
  Braces,
  Coins,
  Database,
  FileSearch,
  GitBranch,
  Layers,
  MessageSquare,
  Network,
  Radar,
  Scissors,
  Shield,
  Split,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { TechnologyContent } from "./types";

export const technologyMeta: {
  id: string;
  module: string;
  icon: LucideIcon;
  span: string;
}[] = [
  { id: "tech-01", module: "MODULE_01", icon: FileSearch, span: "md:col-span-2" },
  { id: "tech-02", module: "MODULE_02", icon: GitBranch, span: "" },
  { id: "tech-03", module: "MODULE_03", icon: Shield, span: "" },
  { id: "tech-04", module: "MODULE_04", icon: Split, span: "" },
  { id: "tech-05", module: "MODULE_05", icon: Database, span: "" },
  { id: "tech-06", module: "MODULE_06", icon: Users, span: "" },
  { id: "tech-07", module: "MODULE_07", icon: Coins, span: "" },
  { id: "tech-08", module: "MODULE_08", icon: BookOpen, span: "" },
  { id: "tech-09", module: "MODULE_09", icon: Braces, span: "" },
  { id: "tech-10", module: "MODULE_10", icon: Network, span: "" },
  { id: "tech-11", module: "MODULE_11", icon: MessageSquare, span: "" },
  { id: "tech-12", module: "MODULE_12", icon: Scissors, span: "" },
  { id: "tech-13", module: "MODULE_13", icon: Radar, span: "" },
  { id: "tech-14", module: "MODULE_14", icon: Layers, span: "md:col-span-2" },
];

const enItems: Omit<TechnologyContent, "icon" | "span">[] = [
  {
    id: "tech-01",
    module: "MODULE_01",
    title: "Code-Fact Driven Semantic Extraction",
    shortTitle: "Semantic Extraction",
    paragraphs: [
      "Builds a precise economic map of your protocol directly from its own source and build artifacts — not from generic vulnerability templates.",
      "Every downstream hypothesis is anchored to what your code actually exposes: guarded functions, asset flows, and reachable attack surfaces. You get audit intelligence that is traceable to your protocol, not borrowed from a pattern library.",
    ],
  },
  {
    id: "tech-02",
    module: "MODULE_02",
    title: "Protocol Invariant Synthesis",
    shortTitle: "Invariant Synthesis",
    paragraphs: [
      "Automatically derives what your protocol claims must never break, then turns those claims into falsifiable security targets.",
      "Instead of hunting random bug classes, the engine focuses on violations of your protocol's own economic and access-control promises — reducing noise and aligning findings with real security intent.",
    ],
  },
  {
    id: "tech-03",
    module: "MODULE_03",
    title: "Threat-Model-Aware Execution",
    shortTitle: "Threat-Model Aware",
    paragraphs: [
      "Tests your protocol the way an unprivileged external attacker would — not as an omnipotent admin.",
      "Setup, initialization, and governance actions are separated from exploitation. The result: fewer out-of-scope false positives and findings that reflect realistic adversarial conditions.",
    ],
  },
  {
    id: "tech-04",
    module: "MODULE_04",
    title: "Dual-Channel Verdict Architecture",
    shortTitle: "Dual-Channel Verdict",
    paragraphs: [
      "Confirms vulnerabilities through two independent lenses: measurable economic harm and broken protocol invariants.",
      "Theft, accounting breakage, unauthorized state changes, and sabotage can all be confirmed — even when an attack does not produce obvious extractable profit.",
    ],
  },
  {
    id: "tech-05",
    module: "MODULE_05",
    title: "State Synthesis For Undeployed Targets",
    shortTitle: "Undeployed Coverage",
    paragraphs: [
      "Audits contest codebases and pre-mainnet protocols even when no live chain history exists.",
      "The engine reconstructs a realistic operational protocol state from the project's own test environment, so verification quality does not depend on mainnet deployment.",
    ],
  },
  {
    id: "tech-06",
    module: "MODULE_06",
    title: "Setup–Attack Causality Separation",
    shortTitle: "Causality Separation",
    paragraphs: [
      "Keeps deployment bootstrap logic cleanly separated from actual attack attempts.",
      "Findings represent exploitable adversarial paths — not artifacts of how the test harness initialized the system.",
    ],
  },
  {
    id: "tech-07",
    module: "MODULE_07",
    title: "Adversarial Capital Emulation",
    shortTitle: "Capital Emulation",
    paragraphs: [
      "Stress-tests protocols under fully funded attacker conditions, not just empty-wallet scenarios.",
      "Surfaces vulnerabilities that only appear when an adversary has meaningful capital, timing, and execution depth — the cases manual review often misses.",
    ],
  },
  {
    id: "tech-08",
    module: "MODULE_08",
    title: "Adaptive Access-Barrier Penetration",
    shortTitle: "Barrier Penetration",
    paragraphs: [
      "Learns from the contract's own rejection signals to push through guarded entry points.",
      "Instead of brute-forcing random inputs forever, the engine converges on values that matter at the protocol's decision boundaries.",
    ],
  },
  {
    id: "tech-09",
    module: "MODULE_09",
    title: "Intelligent Parameter Exploration",
    shortTitle: "Parameter Exploration",
    paragraphs: [
      "Explores unknown calldata and numeric inputs without requiring manual harness authoring.",
      "Enables broad, meaningful coverage of complex function parameters — especially where the correct attack input is not obvious from static inspection alone.",
    ],
  },
  {
    id: "tech-10",
    module: "MODULE_10",
    title: "Non-Linear Exploit Path Discovery",
    shortTitle: "Path Discovery",
    paragraphs: [
      "Discovers multi-step attack chains rather than relying on fixed, linear call scripts.",
      "Reentrancy sequences, ordering-dependent exploits, and compound state manipulations become searchable attack paths instead of one-off manual hypotheses.",
    ],
  },
  {
    id: "tech-11",
    module: "MODULE_11",
    title: "Execution Feedback Translation",
    shortTitle: "Execution Feedback",
    paragraphs: [
      "Turns opaque EVM failures into actionable attack intelligence.",
      "When a path fails, the system explains what guard blocked progress — accelerating convergence toward viable exploit routes.",
    ],
  },
  {
    id: "tech-12",
    module: "MODULE_12",
    title: "Dead-End Recovery And Branch Pruning",
    shortTitle: "Branch Recovery",
    paragraphs: [
      "Escapes stalled exploration paths without losing validated progress.",
      "The engine abandons poisoned branches, preserves successful prefixes, and continues searching from the last stable execution state.",
    ],
  },
  {
    id: "tech-13",
    module: "MODULE_13",
    title: "Live State-Aware Attack Parameterization",
    shortTitle: "Live State Binding",
    paragraphs: [
      "Binds attacks to values that only exist once the protocol is actually running.",
      "Exchange rates, share prices, collateral parameters, and other runtime-derived values can drive realistic economic exploit attempts without manual setup.",
    ],
  },
  {
    id: "tech-14",
    module: "MODULE_14",
    title: "Parallel Swarm Coverage",
    shortTitle: "Swarm Coverage",
    paragraphs: [
      "Scales deep adversarial analysis across large protocol surfaces in parallel.",
      "Multiple specialized agents attack different regions of the system simultaneously — increasing coverage without redundant collision on the same paths.",
    ],
  },
];

const zhItems: Omit<TechnologyContent, "icon" | "span">[] = [
  {
    id: "tech-01",
    module: "MODULE_01",
    title: "代码事实驱动的语义提取",
    shortTitle: "语义提取",
    paragraphs: [
      "直接从协议自身源码与构建产物生成精确的经济拓扑图，而非套用通用漏洞模板。",
      "每条后续假设都锚定于代码真实暴露的内容：受守卫的函数、资产流向与可达攻击面。你获得的是可追溯至本协议的审计情报，而非借自模式库的结论。",
    ],
  },
  {
    id: "tech-02",
    module: "MODULE_02",
    title: "协议 Invariant 自动合成",
    shortTitle: "Invariant 合成",
    paragraphs: [
      "自动推导协议声称「绝不可破坏」的安全属性，并将其转化为可证伪的验证目标。",
      "引擎不再盲目扫描通用 Bug 类别，而是聚焦对你协议自身经济与访问控制承诺的违反——降低噪声，让 finding 对齐真实安全意图。",
    ],
  },
  {
    id: "tech-03",
    module: "MODULE_03",
    title: "威胁模型感知执行",
    shortTitle: "威胁模型感知",
    paragraphs: [
      "以无特权外部攻击者视角测试协议，而非以全能管理员身份操控系统。",
      "部署初始化与治理操作同实际利用严格分离。结果：更少越界假阳性，finding 更贴近 realistic 对抗条件。",
    ],
  },
  {
    id: "tech-04",
    module: "MODULE_04",
    title: "双通道裁决架构",
    shortTitle: "双通道裁决",
    paragraphs: [
      "通过两条独立路径确认漏洞：可测量的经济损害，以及被打破的协议 invariant。",
      "盗窃、会计破坏、未授权状态变更与蓄意破坏均可被确认——即使攻击未产生明显可提取利润。",
    ],
  },
  {
    id: "tech-05",
    module: "MODULE_05",
    title: "未部署目标的状态合成",
    shortTitle: "未部署覆盖",
    paragraphs: [
      "在无 live 链上历史时，仍可审计竞赛代码库与未上链协议。",
      "引擎从项目自身测试环境重建 realistic 运营状态，验证质量不再依赖主网是否已部署。",
    ],
  },
  {
    id: "tech-06",
    module: "MODULE_06",
    title: "Setup–Attack 因果分离",
    shortTitle: "因果分离",
    paragraphs: [
      "将部署/bootstrap 逻辑与实际攻击尝试 cleanly 分离。",
      "Finding 代表可利用的对抗路径——而非测试 harness 初始化方式带来的假象。",
    ],
  },
  {
    id: "tech-07",
    module: "MODULE_07",
    title: "对抗资本仿真",
    shortTitle: "资本仿真",
    paragraphs: [
      "在攻击者充分持资条件下压力测试协议，而非仅模拟空钱包场景。",
      "揭示仅在大资本、时序与执行深度下才出现的漏洞——人工审查常遗漏的类别。",
    ],
  },
  {
    id: "tech-08",
    module: "MODULE_08",
    title: "自适应访问屏障穿透",
    shortTitle: "屏障穿透",
    paragraphs: [
      "从合约自身的拒绝信号中学习，逐步穿透 guarded 入口。",
      "不再无限 brute-force 随机输入，而是收敛至协议决策边界上真正 significant 的数值。",
    ],
  },
  {
    id: "tech-09",
    module: "MODULE_09",
    title: "智能参数探索",
    shortTitle: "参数探索",
    paragraphs: [
      "无需手工编写 harness，即可探索未知 calldata 与数值型输入。",
      "对复杂函数参数实现 broad 且有意义的覆盖——尤其在正确攻击输入无法从静态检查一眼看出时。",
    ],
  },
  {
    id: "tech-10",
    module: "MODULE_10",
    title: "非线性漏洞路径发现",
    shortTitle: "路径发现",
    paragraphs: [
      "发现多步攻击链，而非依赖固定线性调用脚本。",
      "重入序列、顺序依赖型 exploit 与复合状态操纵，从一次性人工假设变为可搜索的 attack path。",
    ],
  },
  {
    id: "tech-11",
    module: "MODULE_11",
    title: "执行反馈翻译",
    shortTitle: "执行反馈",
    paragraphs: [
      "将 opaque 的 EVM 失败转化为可行动的攻击情报。",
      "路径失败时，系统解释是哪道 guard 阻断进展——加速收敛至 viable exploit route。",
    ],
  },
  {
    id: "tech-12",
    module: "MODULE_12",
    title: "死胡同恢复与分支剪枝",
    shortTitle: "分支恢复",
    paragraphs: [
      "在 stalled 探索路径中脱身，同时不丢失已验证进展。",
      "引擎舍弃污染分支、保留成功前缀，并从最后稳定执行状态继续搜索。",
    ],
  },
  {
    id: "tech-13",
    module: "MODULE_13",
    title: "Live 状态感知攻击参数化",
    shortTitle: "Live 状态绑定",
    paragraphs: [
      "将攻击绑定至仅当协议实际运行后才存在的数值。",
      "汇率、份额价格、抵押参数等 runtime 衍生值可驱动 realistic 经济 exploit，无需手动搭建。",
    ],
  },
  {
    id: "tech-14",
    module: "MODULE_14",
    title: "并行蜂群覆盖",
    shortTitle: "蜂群覆盖",
    paragraphs: [
      "对大型协议表面并行扩展深度对抗分析。",
      "多路专业化 agent 同时攻击系统不同区域——提升覆盖而不在同一路径上 redundant 碰撞。",
    ],
  },
];

export function mergeTechnologies(
  items: Omit<TechnologyContent, "icon" | "span">[],
): TechnologyContent[] {
  return items.map((item, index) => ({
    ...item,
    icon: technologyMeta[index].icon,
    span: technologyMeta[index].span,
  }));
}

export const enTechnologies = mergeTechnologies(enItems);
export const zhTechnologies = mergeTechnologies(zhItems);
