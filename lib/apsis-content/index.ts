import type { ApsisContent, Locale } from "./types";

export type { ApsisContent, Locale, MoatCard, TerminalLine, VizAgent } from "./types";

const en: ApsisContent = {
  nav: {
    stack: "Stack",
    paradigm: "Paradigm",
    evidence: "Evidence",
    earlyAccess: "Early Access",
  },
  hero: {
    eyebrow: "Apsis Engine",
    headline: "Smart Contract Security Has Entered the Physical Era.",
    subtitle:
      "LLMs may hypothesize. The EVM decides. Apsis Engine is the world's first neuro-symbolic audit system that bridges heuristic AI reasoning with deterministic Rust execution.",
    cta: "Request Early Access",
    ctaNote: "Invite-only · Protocol teams",
    emailSubject: "Apsis Engine Early Access Request",
    viz: {
      title: "execution_bridge.sys",
      colHypothesis: "OODA LOOP",
      colBridge: "IR BRIDGE",
      colExecution: "REVM EXEC",
      oodaHubLabel: "Tri-Agent OODA Hub",
      colliderInput: "Dual-Graph Collider → Hub",
      agents: [
        { id: "agent_a", role: "Strategist", label: "Agent A · STIR plan" },
        { id: "agent_b", role: "Payload Coder", label: "Agent B · FuzzerIR" },
        { id: "agent_c", role: "State Analyzer", label: "Agent C · FuzzResult" },
      ],
      bridgeLines: [
        "Agent B → lower_to_ir()",
        "validate_fuzzer_ir() · OK",
        "invoke_bridge → revm",
        "run_candidate()",
      ],
      scripts: ["tri_agent_ooda", "fuzzer_compiler", "revm_bridge"],
      executionMode: "zero_state_baseline",
      executionSteps: [
        "setup_state.json · loaded",
        "genesis dump · hydrated",
        "run_candidate() · 4 calls",
        "storage slot mutated",
      ],
      agentCFeedback: "Agent C → ARC → Agent A",
      verdictLabel: "VERDICT",
      verdict: "PROFIT_POSITIVE",
      verdictSub: "Invariant Falsified",
      verdictTag: "+450 ETH",
    },
  },
  moat: {
    tag: "Technical Moat",
    title: "Deterministic Infrastructure. Opaque Internals.",
    subtitle:
      "Rust, neuro-symbolic AI, and SMT solvers — assembled into the Apsis Engine. We publish outcomes, not blueprints.",
    cards: [
      {
        tag: "THE MUSCLE",
        title: "Rust Zero-Copy State Machine",
        body: "High-throughput adversarial mutation without context collapse. Capable of tens of thousands of stateful IPS on a single core.",
      },
      {
        tag: "THE BRAIN",
        title: "Neuro-Symbolic OODA Loop",
        body: "Agentic semantic reasoning tightly bounded by formal math. We use AI to find the attack vector, and Z3 solvers to prove it.",
      },
      {
        tag: "THE DARK MATTER",
        title: "Shadow Mempool Replay",
        body: "MEV-aware execution. We simulate frontrunning, lazy wakeups, and liquidity collapse before they hit mainnet.",
      },
      {
        tag: "BLACK BOX",
        title: "Dual-Graph Intelligence",
        body: "Semantic attack surfaces mapped against physical state transitions. Internal topology classified. Output: falsified invariants only.",
      },
    ],
  },
  paradigm: {
    tag: "Paradigm Shift",
    title: "From Syntax Bugs to Global Economic Falsification.",
    paragraphs: [
      "Finding a missing modifier is trivial. Static analyzers and LLM reviewers have commoditized syntax-level defects. The remaining attack surface is stateful, multi-step, and economically coupled.",
      "Apsis Engine does not grep for reentrancy guards. It executes adversarial mutation against live protocol state — oracle coupling, cross-chain latency windows, liquidation cascades, bad debt spirals — and searches for sequences that only emerge under physical execution.",
      "Heuristic AI proposes attack hypotheses. Rust EVM replays them against zero-state baselines and mempool-shadowed conditions. Z3 constrains the search space. When an invariant breaks, you get a proof-bearing verdict — not a hunch.",
    ],
    pullQuote: "LLMs hypothesize. The EVM decides. Invariants either hold or they don't.",
    highlights: {
      stateful: "stateful",
      multiStep: "multi-step",
      economicallyCoupled: "economically coupled",
      physicalExecution: "physical execution",
    },
  },
  evidence: {
    tag: "Evidence",
    title: "No Testimonials. Only Verdicts.",
    subtitle:
      "Corporate logos prove nothing. A falsified invariant with extracted value is the only credential that matters.",
    sessionLabel: "apsis-engine — audit_session_0x7f3a",
    command: "apsis run --target lending_pool --mode adversarial",
    lines: [
      {
        delay: 0,
        prefix: "[Agent_A]",
        text: "Hypothesizing Flashloan Reentrancy...",
        accent: false,
      },
      {
        delay: 1,
        prefix: "[Agent_B]",
        text: "Compiling IR payload...",
        accent: false,
      },
      {
        delay: 2,
        prefix: "[Rust_EVM]",
        text: "Executing candidate against zero-state baseline...",
        accent: false,
      },
      {
        delay: 3,
        prefix: "[Z3]",
        text: "Constraint propagation: SAT. Path viable.",
        accent: false,
      },
      {
        delay: 4,
        prefix: "[ShadowPool]",
        text: "Mempool replay: frontrun window t+2 blocks...",
        accent: false,
      },
      {
        delay: 5,
        prefix: "[VERDICT]",
        text: "PROFIT_POSITIVE: 450 ETH Extracted. Invariant Falsified.",
        accent: true,
      },
    ],
  },
  footer: {
    brand: "APSIS LAB",
    copyright: "© 2026 Apsis Lab. The EVM does not lie.",
    contact: "Contact",
    privacy: "Privacy Policy",
  },
};

const zh: ApsisContent = {
  nav: {
    stack: "技术栈",
    paradigm: "范式",
    evidence: "证据",
    earlyAccess: "申请内测",
  },
  hero: {
    eyebrow: "Apsis Engine",
    headline: "智能合约安全，已进入物理执行时代。",
    subtitle:
      "LLM 可以假设，EVM 做决定。Apsis Engine 是全球首个神经符号审计引擎——将启发式 AI 推理与 Rust 确定性执行桥接为一体。",
    cta: "申请早期访问",
    ctaNote: "仅限邀请 · 协议团队",
    emailSubject: "Apsis Engine 早期访问申请",
    viz: {
      title: "execution_bridge.sys",
      colHypothesis: "OODA 闭环",
      colBridge: "IR 执行桥",
      colExecution: "REVM 执行",
      oodaHubLabel: "Tri-Agent OODA Hub",
      colliderInput: "Dual-Graph Collider → Hub",
      agents: [
        { id: "agent_a", role: "策略 Agent", label: "Agent A · STIR 攻击计划" },
        { id: "agent_b", role: "载荷编码", label: "Agent B · FuzzerIR" },
        { id: "agent_c", role: "状态分析", label: "Agent C · FuzzResult" },
      ],
      bridgeLines: [
        "Agent B → lower_to_ir()",
        "validate_fuzzer_ir() · OK",
        "invoke_bridge → revm",
        "run_candidate()",
      ],
      scripts: ["tri_agent_ooda", "fuzzer_compiler", "revm_bridge"],
      executionMode: "zero_state_baseline",
      executionSteps: [
        "setup_state.json · 已加载",
        "genesis dump · 已注入",
        "run_candidate() · 4 calls",
        "storage slot · 已变异",
      ],
      agentCFeedback: "Agent C → ARC → Agent A",
      verdictLabel: "裁决",
      verdict: "PROFIT_POSITIVE",
      verdictSub: "不变量已证伪",
      verdictTag: "+450 ETH",
    },
  },
  moat: {
    tag: "技术壁垒",
    title: "确定性基础设施。内部架构保密。",
    subtitle:
      "Rust、神经符号 AI 与 SMT 求解器——集成为 Apsis Engine 有状态执行系统。我们只发布结论，不公开蓝图。",
    cards: [
      {
        tag: "执行层",
        title: "Rust 零拷贝状态机",
        body: "高吞吐对抗性变异，无上下文坍缩。单核可承载数万次有状态 IPS。",
      },
      {
        tag: "推理层",
        title: "神经符号 OODA 闭环",
        body: "Agent 语义推理严格受形式化数学约束。AI 发现攻击向量，Z3 求解器证明它。",
      },
      {
        tag: "暗物质",
        title: "Shadow Mempool 回放",
        body: "MEV 感知执行。在主网上线前模拟抢跑、延迟唤醒与流动性崩溃。",
      },
      {
        tag: "黑箱",
        title: "双图智能",
        body: "语义攻击面映射至物理状态转移。内部拓扑分级保密。输出：仅被证伪的不变量。",
      },
    ],
  },
  paradigm: {
    tag: "范式转移",
    title: "从语法缺陷，到全局经济不变量证伪。",
    paragraphs: [
      "找到一个缺失的 modifier 轻而易举。静态分析器与 LLM 审查器已将语法层缺陷商品化。剩余攻击面是有状态的、多步骤的、经济耦合的。",
      "Apsis Engine 不会 grep 重入锁。它对 live 协议状态执行对抗性变异——预言机耦合、跨链延迟窗口、清算级联、坏账螺旋——搜索仅在物理执行下才浮现的攻击序列。",
      "启发式 AI 提出攻击假设。Rust EVM 在零状态基线与 mempool 影子条件下回放。Z3 约束搜索空间。当不变量被击穿，你得到的是可证明的裁决——而非猜测。",
    ],
    pullQuote: "LLM 假设。EVM 裁决。不变量要么成立，要么不成立。",
    highlights: {
      stateful: "有状态的",
      multiStep: "多步骤的",
      economicallyCoupled: "经济耦合的",
      physicalExecution: "物理执行",
    },
  },
  evidence: {
    tag: "证据",
    title: "不要证言。只要裁决。",
    subtitle:
      "企业 Logo 证明不了什么。被证伪的不变量与可提取价值，才是唯一有效的凭证。",
    sessionLabel: "apsis-engine — audit_session_0x7f3a",
    command: "apsis run --target lending_pool --mode adversarial",
    lines: [
      {
        delay: 0,
        prefix: "[Agent_A]",
        text: "Hypothesizing Flashloan Reentrancy...",
        accent: false,
      },
      {
        delay: 1,
        prefix: "[Agent_B]",
        text: "Compiling IR payload...",
        accent: false,
      },
      {
        delay: 2,
        prefix: "[Rust_EVM]",
        text: "Executing candidate against zero-state baseline...",
        accent: false,
      },
      {
        delay: 3,
        prefix: "[Z3]",
        text: "Constraint propagation: SAT. Path viable.",
        accent: false,
      },
      {
        delay: 4,
        prefix: "[ShadowPool]",
        text: "Mempool replay: frontrun window t+2 blocks...",
        accent: false,
      },
      {
        delay: 5,
        prefix: "[VERDICT]",
        text: "PROFIT_POSITIVE: 450 ETH Extracted. Invariant Falsified.",
        accent: true,
      },
    ],
  },
  footer: {
    brand: "APSIS LAB",
    copyright: "© 2026 Apsis Lab. EVM 不会说谎。",
    contact: "联系",
    privacy: "隐私政策",
  },
};

export const apsisContent: Record<Locale, ApsisContent> = { en, zh };
