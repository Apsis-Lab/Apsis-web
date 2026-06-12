import type { LandingContent, Locale } from "./types";
import { enTechnologies, zhTechnologies } from "./technologies";

export { BRAND_NAME } from "./types";
export type { LandingContent, Locale, TechnologyContent } from "./types";

export const content: Record<Locale, LandingContent> = {
  en: {
    nav: {
      engine: "Engine",
      technologies: "Technologies",
      moat: "Moat",
      operations: "Operations",
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
        "Adversarial",
        "Verification",
        "For EVM Protocols",
      ],
      titleHighlightIndex: 0,
      paragraph1:
        "Every vulnerability claim must survive physical execution against real EVM state before it is evidence. Everything else is conjecture.",
      paragraph2:
        "Vibe Audit Engine is a hybrid neuro-symbolic Automated Exploit Generation platform. It does not scan. It does not alert. It synthesizes and detonates adversarial hypotheses against live EVM execution environments and returns binary, stake-weighted verdicts.",
      paragraph3:
        "A finding is confirmed only when the execution substrate measures a quantifiable economic or invariant violation. Execution truth is the only currency.",
      ctaPrimary: "Request Access",
      ctaSecondary: "View Technologies",
      status: [
        { label: "TRUTH", value: "EXECUTION" },
        { label: "VERDICT", value: "DUAL-CHANNEL" },
        { label: "GROUND", value: "CODE-FACT" },
      ],
      visual: {
        blockLabel: "MAINNET_FORK",
        contractLabel: "TARGET_CONTRACT",
        staticTrack: "SEMANTIC / ATLAS",
        dynamicTrack: "EXECUTION / REVM",
        forkExec: "parallel Rust substrate",
        profitGate: "profit ∨ SDMS?",
        verdict: "→ CONFIRMED",
        caption:
          "Semantic reasoning and physical execution are irreconcilable domains — verdicts require measured violation on forked or synthesized EVM state.",
      },
    },
    hypothesis: {
      sectionTag: "SECTION_01",
      sectionMeta: "HYPOTHESIS / PROBLEM",
      title: "The Hypothesis",
      paragraphs: [
        "The smart contract security industry operates on a structurally flawed feedback loop. Static analyzers produce thousands of unverified alerts rooted in pattern-matching heuristics with no ground-truth verification mechanism.",
        "Manual auditors apply high-skill reasoning across dangerously narrow time windows, generating findings whose completeness is bounded by human fatigue and calendar constraints.",
        "Conventional fuzzers mutate calldata stochastically without understanding economic intent, protocol invariants, or the adversarial context in which vulnerabilities become exploitable.",
        "None of these systems can answer the only question that matters in production: can an autonomous adversary, operating with realistic capital and timing constraints, produce a measurable economic or invariant violation from this codebase?",
        "Vibe Audit Engine is built around the empirical answer to that question.",
      ],
    },
    engine: {
      sectionTag: "SECTION_02",
      sectionMeta: "PRODUCT / ARCHITECTURE",
      title: "What the Engine Is",
      intro:
        "Vibe Audit Engine partitions security intelligence into two irreconcilable domains connected only by a strictly typed, versioned, schema-validated IR serialization layer.",
      semanticTitle: "Semantic Reasoning Domain",
      semanticBody:
        "Extracts a rigorous machine-readable representation of the target protocol's economic topology — its assets, access-control surfaces, guarded state-mutation paths, and invariant structure — entirely from source artifacts, without executing a single instruction.",
      executionTitle: "Execution Domain",
      executionBody:
        "Receives compiled adversarial programs derived from semantic representations and measures their effect against real forked or synthesized EVM state using a high-performance multi-threaded execution substrate written entirely in systems-level Rust.",
      boundary:
        "These two domains share no data structures, no LLM outputs, and no execution context.",
      rule: "No degree of semantic confidence, no LLM agreement, no static implication graph elevates a hypothesis to a vulnerability. Execution truth is the only currency.",
    },
    technologies: {
      sectionTag: "SECTION_03",
      sectionMeta: "CORE_TECH / STACK",
      title: "Core Technology Stack",
      description:
        "Fourteen integrated capabilities that define VibeSec's adversarial infrastructure. Each module below explains what it delivers — not how it is wired internally.",
      readSpec: "Read Spec",
      specSheet: "CAPABILITIES",
      specMeta: "WHAT IT DELIVERS",
      backToGrid: "Back to Grid",
      items: enTechnologies,
    },
    moat: {
      sectionTag: "SECTION_04",
      sectionMeta: "MOAT / INTEGRATION",
      title: "The Architectural Moat",
      intro:
        "The engine's competitive differentiation is not any single technique. It is the precise, enforced integration of all techniques across a coherent pipeline architecture where each layer's outputs are the exclusive inputs to the next, every data contract is machine-validated at the boundary, and no component can produce results that bypass the physical execution truth gate.",
      pillars: [
        {
          title: "Code-Fact Grounding",
          text: "Every hypothesis traces to a verifiable artifact in the target codebase — not a pattern database, not a vulnerability template, not a framework assumption.",
        },
        {
          title: "SAGE Threat-Model Awareness",
          text: "Governance operations are contextualized correctly — setup is separated from exploitation, legitimate administrative actions are distinguished from attack vectors, and the engine never produces out-of-scope findings that require admin cooperation.",
        },
        {
          title: "Dual-Channel Verdict Coverage",
          text: "The full landscape of protocol violations is confirmable — theft, sabotage, invariant destruction, state corruption, DoS — without requiring each vulnerability class to produce measurable extractable profit.",
        },
        {
          title: "Physical Memory Truncation",
          text: "The reasoning substrate can explore the non-linear attack surface without accumulating contradictory context that induces hallucinated tool usage.",
        },
      ],
      closing: [
        "The LLM cannot produce code. The IR compiler cannot emit semantically invalid programs. The execution substrate cannot confirm findings that do not pass the OR-gate verdict.",
        "The tautology eliminators cannot be bypassed at either stage. The causality decoupling cannot be violated at any layer. The actor identity constraints cannot be circumvented by any topology the schema layer accepts.",
        "The SAGE partition cannot place governance operations in adversarial execution lanes. Security infrastructure at production scale requires this kind of compositional correctness. Individual techniques can be approximated. The systematic, enforced integration cannot.",
      ],
    },
    operations: {
      sectionTag: "SECTION_05",
      sectionMeta: "OPERATIONS / DEPLOYMENT",
      title: "Operational Positioning",
      items: [
        {
          title: "Engagement Model",
          text: "The engine accepts a structured YAML audit manifest specifying the target repository, scope constraints, trusted role definitions, known issues, and protocol-authoritative invariants. These invariants are merged with machine-generated invariant targets from the AIG pipeline to form the complete auditor task table. No manual configuration beyond the manifest is required for standard engagements.",
        },
        {
          title: "Target Compatibility",
          text: "The engine operates against any EVM-compatible target — deployed mainnet contracts via live state forking, pre-deployment contest codebases via zero-state synthesis, and local Foundry workspaces via direct AST extraction. The execution mode is determined automatically from target characteristics.",
        },
        {
          title: "Execution Model",
          text: "Static analysis workers and dynamic verification workers run concurrently. Static worker count scales with invariant surface area up to the API concurrency limit. Dynamic worker count is determined by the invariant dispatch table. Both pools are independent and non-blocking.",
        },
        {
          title: "Resumption Model",
          text: "All expensive intermediate artifacts — synthesized protocol states, compiled build-info ASTs, completed auditor findings — are preserved across session boundaries. An interrupted or partially completed engagement resumes from the most recent stable artifact checkpoint without repeating any completed computation.",
        },
        {
          title: "Verdict Model",
          text: "Every finding produced by the dynamic verification phase is accompanied by the specific IR sequence that produced it, the measured economic or invariant violation, the execution trace at the point of confirmation, and the relevant SDMS constraint that was broken or the profit delta that was measured. No finding is produced without this evidence package.",
        },
      ],
    },
    notSection: {
      sectionTag: "SECTION_06",
      sectionMeta: "DOCTRINE / BOUNDARY",
      title: "What This Engine Is Not",
      paragraphs: [
        "It is not a linter. It is not a pattern-matcher. It is not a test generator. It is not an alert system that requires a human to triage its output before determining whether the finding is real.",
        "It is an autonomous adversarial verification system. The findings it produces are not suggestions. They are measured violations of formally specified security properties, confirmed by physical EVM execution against realistic protocol state, with fully traceable evidence chains.",
      ],
      closing: [
        "The protocols that survive it are genuinely harder to attack.",
        "The ones that do not survive it were going to be exploited eventually.",
        "The engine simply finds out first.",
      ],
    },
    footer: {
      contactTag: "CONTACT",
      titleLines: ["Security infrastructure,", "not audit labor."],
      description:
        "Request access to deploy autonomous adversarial verification against your protocol surface. Every finding survives physical EVM execution — or it is not evidence.",
      email: "Email",
      twitter: "X · @StevenJ_Sec",
      brandLine: "VIBESEC",
      tagline: "EXECUTION TRUTH · DUAL-CHANNEL · CODE-FACT",
    },
  },
  zh: {
    nav: {
      engine: "引擎",
      technologies: "核心技术",
      moat: "护城河",
      operations: "运维模型",
      contact: "联系",
      access: "申请接入",
    },
    hero: {
      sysInit: "系统初始化",
      operational: "运行中",
      moduleLabel: "模块_00",
      entryPoint: "首屏 / 入口",
      titleLines: ["自主", "对抗性", "验证", "面向 EVM 协议"],
      titleHighlightIndex: 0,
      paragraph1:
        "每一条漏洞断言必须在真实 EVM 状态上的物理执行中存活，方可成为证据。其余皆为推测。",
      paragraph2:
        "Vibe Audit Engine 是混合神经符号的自动化漏洞生成平台。它不扫描、不告警，而是合成并在 live EVM 执行环境中引爆对抗假设，返回二元、 stake-weighted 裁决。",
      paragraph3:
        "仅当执行基底测得可量化的经济或 invariant 违反时，finding 才被确认。执行真值是唯一货币。",
      ctaPrimary: "申请接入",
      ctaSecondary: "查看核心技术",
      status: [
        { label: "真值", value: "执行" },
        { label: "裁决", value: "双通道" },
        { label: "锚定", value: "代码事实" },
      ],
      visual: {
        blockLabel: "主网分叉",
        contractLabel: "目标合约",
        staticTrack: "语义 / 图谱",
        dynamicTrack: "执行 / REVM",
        forkExec: "Rust 并行基底",
        profitGate: "profit ∨ SDMS?",
        verdict: "→ 已确认",
        caption:
          "语义推理与物理执行为不可调和的两域——裁决须以分叉或合成 EVM 状态上的 measured violation 为准。",
      },
    },
    hypothesis: {
      sectionTag: "章节_01",
      sectionMeta: "假设 / 问题",
      title: "核心假设",
      paragraphs: [
        "智能合约安全行业运行于结构有缺陷的反馈闭环之上。静态分析器产出数以千计未经证实的告警，根植于无 ground-truth 验证机制的模式匹配启发式。",
        "人工审计者在危险狭窄的时间窗口内施加高技能推理，其 finding 的完整性受人类疲劳与日历约束所限。",
        "常规模糊测试随机突变 calldata，不理解经济意图、协议 invariant 或漏洞变为可利用的对抗上下文。",
        "这些系统均无法回答生产环境中唯一重要的问题：自主对抗者，在 realistic 资本与时序约束下，能否从该代码库产生可测量的经济或 invariant 违反？",
        "Vibe Audit Engine 围绕该问题的 empirical 答案而构建。",
      ],
    },
    engine: {
      sectionTag: "章节_02",
      sectionMeta: "产品 / 架构",
      title: "引擎是什么",
      intro:
        "Vibe Audit Engine 将安全智能划分为两个不可调和的域，仅通过严格类型化、版本化、schema 验证的 IR 序列化层连接。",
      semanticTitle: "语义推理域",
      semanticBody:
        "从源码产物 entirely 提取目标协议经济拓扑的 rigorous 机器可读表示——资产、访问控制面、受守卫的状态变更路径与 invariant 结构——不执行任何指令。",
      executionTitle: "执行域",
      executionBody:
        "接收由语义表示编译的对抗程序，以全 Rust 系统级高性能多线程执行基底，在真实分叉或合成的 EVM 状态上测量其效果。",
      boundary: "两域不共享数据结构、LLM 输出或执行上下文。",
      rule: "无论语义置信度多高、LLM 是否一致、静态蕴含图如何，均无法将假设提升为漏洞。执行真值是唯一货币。",
    },
    technologies: {
      sectionTag: "章节_03",
      sectionMeta: "核心技术 / 栈",
      title: "核心技术栈",
      description:
        "定义 VibeSec 对抗基础设施的十四项核心能力。以下各模块说明「能交付什么」——而非内部如何实现。",
      readSpec: "阅读规格",
      specSheet: "能力说明",
      specMeta: "交付价值",
      backToGrid: "返回概览",
      items: zhTechnologies,
    },
    moat: {
      sectionTag: "章节_04",
      sectionMeta: "护城河 / 集成",
      title: "架构护城河",
      intro:
        "引擎的 competitive differentiation 非任何单一技术，而是所有技术在连贯流水线架构中的 precise、enforced 集成——每层输出是下层的 exclusive 输入，每个数据契约在边界 machine-validated，无组件可 bypass 物理执行真值门。",
      pillars: [
        {
          title: "代码事实锚定",
          text: "每个假设可追溯至目标代码库中 verifiable 的产物——非模式库、非漏洞模板、非框架假设。",
        },
        {
          title: "SAGE 威胁模型感知",
          text: "治理操作被正确 contextualize——setup 与 exploit 分离，合法管理行为与攻击向量区分，引擎不产生需管理员配合的越界 finding。",
        },
        {
          title: "双通道裁决覆盖",
          text: "完整违规谱系可确认——盗窃、破坏、invariant 摧毁、状态 corruption、DoS——无需每类漏洞均产生可提取利润。",
        },
        {
          title: "物理内存截断",
          text: "推理基底可探索非线性攻击面，而不累积诱发 hallucinated tool usage 的 contradictory context。",
        },
      ],
      closing: [
        "LLM 不能产出代码。IR 编译器不能 emit 语义无效程序。执行基底不能确认未通过 OR 门裁决的 finding。",
        "同语反复消除器在任一阶段不可 bypass。因果解耦在任一层不可违反。Actor identity 约束不能被 schema 层接受的 topology circumvent。",
        "SAGE 分区不能将治理操作放入对抗执行车道。生产级安全基础设施需要此类 compositional correctness。Individual 技术可被 approximate；系统化 enforced 集成不可。",
      ],
    },
    operations: {
      sectionTag: "章节_05",
      sectionMeta: "运维 / 部署",
      title: "运维定位",
      items: [
        {
          title: "接入模型",
          text: "引擎接受结构化 YAML 审计 manifest，指定目标仓库、scope 约束、可信角色定义、已知 issue 与协议权威 invariant。这些 invariant 与 AIG 流水线 machine-generated 目标合并形成完整 auditor task table。标准 engagement 无需 manifest 之外的手动配置。",
        },
        {
          title: "目标兼容性",
          text: "引擎对任意 EVM 兼容目标运行——已部署主网合约（live state fork）、未部署竞赛代码库（zero-state synthesis）、本地 Foundry workspace（direct AST extraction）。执行模式由目标特征自动决定。",
        },
        {
          title: "执行模型",
          text: "静态分析 worker 与动态验证 worker 并发运行。静态 worker 数随 invariant 表面积扩展至 API 并发上限。动态 worker 数由 invariant dispatch table 决定。两池独立 non-blocking。",
        },
        {
          title: "恢复模型",
          text: "所有昂贵中间产物——合成协议状态、编译 build-info AST、已完成 auditor finding——跨 session 边界保留。中断或部分完成的 engagement 从最近 stable artifact checkpoint 恢复，不重复已完成计算。",
        },
        {
          title: "裁决模型",
          text: "动态验证 phase 产出的每个 finding 附带产生它的 IR 序列、测得的经济或 invariant 违反、确认点的 execution trace，以及 broken 的 SDMS 约束或测得的 profit delta。无 evidence package 则无 finding。",
        },
      ],
    },
    notSection: {
      sectionTag: "章节_06",
      sectionMeta: "准则 / 边界",
      title: "引擎不是什么",
      paragraphs: [
        "它不是 linter。不是 pattern-matcher。不是 test generator。不是需要人工 triage 才能判断 finding 是否真实的 alert system。",
        "它是自主对抗验证系统。其 finding 不是建议，而是 formally specified 安全属性的 measured 违反，由 physical EVM execution 在 realistic protocol state 上确认，附带 fully traceable evidence chain。",
      ],
      closing: [
        "能 survive 它的协议，genuinely 更难被攻击。",
        "不能 survive 的，eventually 终将被 exploit。",
        "引擎只是最先发现。",
      ],
    },
    footer: {
      contactTag: "联系",
      titleLines: ["安全基础设施，", "而非审计劳力。"],
      description:
        "申请接入，对你的协议表面部署自主对抗验证。每条 finding 须在 physical EVM execution 中存活——否则不是证据。",
      email: "邮件",
      twitter: "X · @StevenJ_Sec",
      brandLine: "VIBESEC",
      tagline: "执行真值 · 双通道 · 代码事实",
    },
  },
};
