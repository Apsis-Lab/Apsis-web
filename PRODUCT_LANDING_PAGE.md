# Vibe Audit Engine — Product Positioning & Core Technology Brief

**Classification:** Commercial product intelligence  
**Audience:** Technical evaluators, institutional security buyers, protocol governance, integration partners  
**Doctrine:** Every vulnerability claim must survive physical execution against real EVM state before it is evidence. Everything else is conjecture.

---

## The Hypothesis

The smart contract security industry operates on a structurally flawed feedback loop. Static analyzers produce thousands of unverified alerts rooted in pattern-matching heuristics with no ground-truth verification mechanism. Manual auditors apply high-skill reasoning across dangerously narrow time windows, generating findings whose completeness is bounded by human fatigue and calendar constraints. Conventional fuzzers mutate calldata stochastically without understanding economic intent, protocol invariants, or the adversarial context in which vulnerabilities become exploitable. None of these systems can answer the only question that matters in production: *can an autonomous adversary, operating with realistic capital and timing constraints, produce a measurable economic or invariant violation from this codebase?*

Vibe Audit Engine is built around the empirical answer to that question.

---

## What the Engine Is

Vibe Audit Engine is a hybrid neuro-symbolic Automated Exploit Generation platform. It does not scan. It does not alert. It synthesizes and detonates adversarial hypotheses against live EVM execution environments and returns binary, stake-weighted verdicts: the protocol holds under adversarial pressure, or it does not.

The system achieves this through a multi-stage pipeline that partitions security intelligence into two irreconcilable domains. The **semantic reasoning domain** extracts a rigorous machine-readable representation of the target protocol's economic topology — its assets, access-control surfaces, guarded state-mutation paths, and invariant structure — entirely from source artifacts, without executing a single instruction. The **execution domain** receives compiled adversarial programs derived from those semantic representations and measures their effect against real forked or synthesized EVM state using a high-performance multi-threaded execution substrate written entirely in systems-level Rust.

These two domains share no data structures, no LLM outputs, and no execution context. The boundary between them is a strictly typed, versioned, schema-validated IR serialization layer.

The engine's core epistemic rule: a finding is confirmed only when the execution substrate measures a quantifiable economic or invariant violation. No degree of semantic confidence, no LLM agreement, no static implication graph elevates a hypothesis to a vulnerability. Execution truth is the only currency.

---

## Core Technology Stack

### Code-Fact Driven Semantic Extraction

The engine's analysis is grounded exclusively in facts extracted from the target protocol's own build artifacts. There are no pre-loaded vulnerability pattern libraries, no heuristic risk classifiers, and no generic template databases. The entire analytical surface is derived from: function-level access-control guard chains extracted from Solidity ASTs, asset mutation dependency graphs compiled from storage variable references, bytecode fingerprints from Foundry build-info artifacts for precise contract address resolution, and comparison operand values captured from live EVM execution feedback.

This commitment to code-fact grounding means that every invariant synthesized, every exploit hypothesis generated, and every mutation target selected traces its origin to a specific, verifiable artifact in the target codebase. There is no analytical judgment that cannot be traced to a measurable source.

The **Semantic Atlas** — a structured YAML artifact compiled from AST analysis without invoking any language model — serves as the single source of factual ground truth for all downstream reasoning. It captures what economic surfaces the protocol exposes: which functions mutate which assets, which guards protect those mutations, and which compositional execution paths are candidates for invariant violation. This atlas is the only representation of the target that the reasoning layer receives.

### Protocol Invariant Synthesis and the AIG Pipeline

The **Attack Invariant Generator** is an automated pipeline that systematically converts protocol-specific security guarantees into machine-executable falsifiability targets. Rather than relying on generic vulnerability classes or hand-authored test suites, the AIG derives invariant targets directly from the intersection of two code-fact dimensions: functions that carry formal access-control guards, and functions that demonstrably mutate protocol-owned economic assets. Only functions satisfying both conditions simultaneously are candidates for invariant synthesis.

Candidate guarded asset-mutation paths are subjected to **Hoare-logic inversion**: the access-control preconditions are semantically negated to produce attack-oriented differential assertions. These assertions express the exact state transitions that, if achievable by an unprivileged actor, would constitute a security violation. The LLM participates in this inversion as a Hoare-logic linter, applying semantic knowledge of Solidity protocol patterns to translate guard structures into differential constraints expressed in the **State-Differential Mapping Schema** (SDMS).

Before any generated invariant enters the execution pipeline, it passes through a **Z3-powered tautology elimination stage**. Each differential constraint is mapped to a formal integer-variable system, the no-operation baseline assumption is imposed — every observable is fixed equal across the attack boundary — and a Z3 satisfiability solver determines whether the constraint is provably true under that assumption. Constraints that are tautologies are eliminated at this stage; only genuinely falsifiable assertions reach the execution layer. This mechanism also applies a fail-open policy: constraints that cannot be fully parsed are passed downstream rather than silently discarded, ensuring zero phantom elimination of valid attack targets.

The resulting invariant set — AIG-synthesized differential assertions merged with protocol-authoritative invariants from the audit manifest — forms the **invariant dispatch table**. Each entry in this table becomes an independent auditor task in the dynamic verification phase. Worker count is determined entirely by this table; the relationship between invariant surface area and auditor parallelism is deterministic and traceable.

### Threat-Model-Aware Execution: The SAGE Architecture

A persistent failure mode in automated security tooling is the **out-of-scope false positive**: the system discovers that it can manipulate the protocol by exercising admin-only governance functions. This is trivially true for any function gated by an access control modifier and does not constitute an exploitable vulnerability for an unprivileged attacker.

The engine eliminates this class of false positives through the **SAGE Architecture** (Systematic Admin Governance Emulation), which enforces a rigorous semantic partition between protocol configuration and adversarial exploitation.

SAGE operates on a foundational distinction: some operations that appear in an attacker's call sequence are actually pre-conditions for the protocol reaching its legitimate operational state — granting roles, initializing parameters, seeding reserves. These are configuration, not exploitation. SAGE identifies them automatically at execution time by probing each proposed call under its declared caller and observing whether it succeeds. When a call fails under the unprivileged attacker and SAGE determines that a legitimate authority can execute it, the call is reclassified as setup, executed under a governance identity, and its resulting state is **permanently committed to the genesis baseline**. The attacker then proceeds from the reconfigured protocol state — in exactly the same adversarial position as a real attacker who enters the protocol after deployment and initialization are complete.

The governance identity selection is fully dynamic. Rather than relying on hardcoded framework-specific addresses that may be irrelevant to the target deployment, SAGE employs a **Dynamic Genesis Provenance** (DGP) algorithm that interrogates the synthesized protocol state directly to identify the most likely administrative authorities from evidence present in the genesis itself. This makes SAGE universally applicable across deployment frameworks, proxy patterns, and initialization sequences without any manual address configuration.

Critically, SAGE does not suppress genuine access-control vulnerabilities. If a governance function lacks proper access control and an unprivileged caller can trigger it directly, the attacker in the exploit lane succeeds on first contact — SAGE is never invoked. SAGE's caller-shifting activates only when the declared caller demonstrably fails and a governance-context execution is required to establish legitimate protocol state.

The OOS Guillotine — a hard constraint enforced at the Pydantic schema layer — makes it structurally impossible for any topology the engine accepts to place privileged actors in attack sequences. This constraint is enforced at schema validation time, not at execution time. It cannot be bypassed.

### Dual-Channel Verdict Architecture and SDMS

The engine produces verdicts through two independent, non-redundant channels operating simultaneously against the same execution substrate.

The **profit oracle channel** measures direct economic extraction: the delta between an actor's post-attack asset balance and their pre-attack baseline, optionally adjusted for gas expenditure, compared against a configurable minimum threshold. This channel confirms theft.

The **State-Differential Mapping Schema channel** measures invariant violation. SDMS is a declarative assertion language in which each assertion binds named observable variables to on-chain read operations and expresses a differential constraint relating pre-attack and post-attack values of those observables through algebraic comparison operators. The execution substrate samples all observable states immediately before and after the attack sequence, substitutes measured values into the constraint expression, and evaluates the result. If any constraint evaluates to logically true — meaning the protocol's declared invariant has been violated — the finding is confirmed regardless of whether direct profit is measurable.

This OR-gate architecture allows the engine to confirm the full landscape of protocol violations: theft, sabotage, accounting desynchronization, share-price manipulation, supply-cap bypass, unauthorized state mutation, DoS through invariant destruction, and any other condition that a developer-specified differential constraint can express. A vulnerability does not need to produce extractable profit to be confirmed. It needs only to cause a post-attack observable measurement to satisfy the declared constraint expression.

The SDMS assertion language enforces a strict naming convention for observable variables to prevent parsing ambiguity in differential expressions. A secondary Z3 tautology gate operates inside the dynamic verification OODA loop, intercepting LLM-proposed SDMS assertions before they enter the IR compilation layer using 256-bit bitvector semantics — matching Solidity's integer model exactly — and rejecting trivially satisfied constraints with structured diagnostic feedback.

### Maximum Protocol State Synthesis for Undeployed Targets

Contest codebases, pre-mainnet protocols, and audit targets with no on-chain history present a fundamental challenge: there is no live state to fork. The engine resolves this through **Genesis Purging**, a three-phase automated state synthesis methodology that extracts the Maximum Protocol State (MPS) from the target project's own test infrastructure.

Phase I performs panoptic state extraction. The engine scores all Foundry test contracts in the workspace for injection suitability using a multi-factor evaluation covering inheritance structure, setup method presence, deployment function naming patterns, and base contract relationships. The highest-scored target receives a synthetic test function containing a Foundry state serialization cheatcode call. The engine then executes the existing test suite's deployment and initialization sequence, capturing the complete post-setup EVM state — all deployed contract bytecode, all initialized storage, all token balances, all role assignments — at the exact moment the protocol reaches its legitimate operational baseline.

Phase II performs temporal state purging. The raw captured state contains storage slots written by test environment EOAs that are not part of the protocol's own state. A deterministic filter set of known test-framework addresses removes any storage slot whose key or value carries a fingerprint of these addresses, isolating genuine protocol-owned state from test harness noise.

Phase III performs orthogonal synthesis and semantic address labeling. Multiple state captures from different test contexts are union-merged under conflict resolution rules that favor higher-information states. Each deployed contract address is mapped to a semantic identifier through a four-level bytecode fingerprinting cascade: exact runtime hash matching, CBOR-stripped metadata hash matching, opcode skeleton matching with PUSH payload normalization for immutable-safe comparison, and similarity-threshold matching for contracts with minor runtime variations. EIP-1967 transparent proxy patterns receive automatic dual-entry labeling in the address registry.

The result is a semantically labeled, test-noise-purged, protocol-representative EVM state that the execution substrate loads as the zero-state baseline — providing the same physical realism as a live mainnet fork for any target regardless of deployment status.

### Multi-Actor Causality Decoupling and the Setup-Attack Partition

The engine enforces strict **causality lane decoupling** at every layer of the pipeline. A dedicated actor identity — address-locked and role-semantically distinct from all attack actors — executes all setup operations before the EVM state snapshot is committed. Execution-time snapshotting occurs at the precise moment the setup sequence completes. All attack sequences execute exclusively after and against this snapshot, on cloned state that has no memory of the setup actor.

This partition is enforced at three independent layers: the Pydantic-validated semantic schema rejects any topology where a setup-designated actor appears in attack sequences; the IR compilation layer emits setup and attack calls into separate typed lists with incompatible IR structures; and the Rust execution substrate executes setup exactly once before snapshot and never includes it in the parallel mutation loop. Violation at any layer is a hard error.

The symmetric constraint — the OOS Guillotine — prevents privileged actors from appearing in attack sequences at schema validation time, making privilege-dependent exploits structurally unrepresentable rather than merely discouraged.

### Phantom Liquidity Materialization with Structural Integrity Preservation

Many DeFi vulnerabilities are only reachable by actors who possess large capital positions. The engine materializes phantom liquidity directly at the EVM storage layer without any protocol interaction. For each target asset and each simulated actor, the execution substrate performs a dry-run call to the balance reading function of the target token contract while a low-level opcode inspector traces every storage load executed during that call. The set of accessed storage slots is captured.

For each candidate storage slot, the engine performs a **safe probe**: it writes the maximum sentinel value to the slot, then verifies the result by re-executing the balance read in a non-committing context. If the call succeeds and the returned balance increased, the slot is confirmed and cached for that token. If the call **reverts or produces no balance increase** — as occurs when writing to a proxy implementation pointer, a struct header slot, or any storage position whose modification breaks the contract's execution path — the write is immediately rolled back to the original slot value. The contract's physical storage structure is never permanently corrupted.

This safe-probe rollback mechanism means phantom liquidity injection is always non-destructive with respect to contract integrity. Proxy contracts, upgradeable implementations, and complex storage layouts are handled without any prior knowledge of their internal structure — the contract's own execution behavior is the probe. When tracing fails entirely for non-standard balance implementations, a systematic traversal of low-index storage slots across the address book covers the most prevalent Solidity mapping storage patterns as a fallback path.

All simulated actors receive identical maximum-value liquidity provisioning, modeling full adversarial capital capability.

### CMPLOG Dynamic Dictionary and Adaptive Require-Barrier Penetration

Access-controlled functions in Solidity overwhelmingly rely on comparison operations to enforce their preconditions. A stochastic mutation engine generating random calldata will fail these comparisons indefinitely, never reaching the execution logic containing the vulnerability.

The engine resolves this through a **CMPLOG-inspired dynamic dictionary** that accumulates comparison operand pairs observed during live execution. When any mutation candidate executes a comparison instruction immediately before reverting, the execution substrate's opcode-level inspector captures both operands. These captured values are entered into a per-session dictionary that persists across the parallel mutation population. Subsequent iterations sample from this dictionary at high probability when populating unconstrained parameter slots — converging the mutation population toward values that the contract itself has revealed are significant at its decision boundaries.

This mechanism requires no static analysis of require conditions, no symbolic execution, and no manual specification of input domains. The contract's own rejection signals build the dictionary that cracks its barriers. The mechanism interacts directly with the abstract parameter generation layer: when a call sequence contains HOLE-marked parameter slots, the dictionary provides the primary candidate values for those slots.

### Abstract Parameter Generation and HOLE-Driven Probabilistic Search

When the semantic reasoning agent cannot determine the correct concrete value for a function parameter, it emits an abstract placeholder. The IR compilation stage recognizes these placeholders and converts them into unstructured mutation targets — parameter slots the execution substrate fills independently on each iteration.

Unstructured mutation targets interact directly with the dynamic dictionary: high-probability sampling from accumulated comparison operands, low-probability sampling from a pseudo-random seed. Over the mutation population, this produces comprehensive coverage of numerically plausible parameter combinations without requiring the reasoning agent to enumerate them.

For functions where the reasoning agent provides no parameters at all, the IR compiler performs **Auto-symbolic Provisioning**: it automatically generates abstract placeholders for all numeric argument slots from the function's ABI signature. Address-typed arguments default to the primary attacker identity. Underspecified function calls participate meaningfully in the mutation loop without requiring any manual parameterization.

### RRT\*-Inspired Non-Linear Action Pool Exploration

Complex multi-step exploits — reentrancy through cross-contract callchains, MEV-sequenced state manipulation, temporal invariant violations requiring specific operation ordering — cannot be discovered by linear, pre-specified call sequences. The engine addresses this through an **action pool mechanism** coupled with Rapidly-exploring Random Tree-inspired search. The reasoning agent populates a pool of candidate actions whose optimal ordering is not known a priori. The execution substrate's parallel mutation loop explores this pool using a depth-limited tree search over possible orderings, guided by a pseudo-random index function designed to maximize inter-candidate diversity across the parallel population. The combinatorial search space of action orderings is explored without explicit enumeration.

### Semantic Revert Translation and LLM Ground-Truth Feedback

When an EVM execution fails, the raw revert reason provides no semantic context to a reasoning process operating above the bytecode level. The engine equips its execution substrate with an opcode-level inspector that monitors comparison instruction execution throughout each candidate run. When a revert occurs, the inspector captures the specific comparison operator, both operands at the moment of comparison, and the top elements of the EVM execution stack. This is translated into a structured natural-language diagnostic that communicates the precise numeric relationship that caused the rejection and injected directly into the reasoning agent's decision context.

The reasoning agent receives not "this call reverted" but a structured trace naming the guard type, the expected value, the presented value, and their relationship. This transforms EVM revert signals from opaque binary failures into actionable semantic feedback.

### Physical Memory Truncation: Deadlock Detection and Orthogonal Exploration

Adversarial search against a stateful EVM protocol is not a linear reasoning problem. Paths that appear promising may lead to invariably guarded terminal states where no progress is possible. A system that cannot escape these dead-ends exhausts its turn budget without producing useful coverage.

The engine implements a surgical **physical memory truncation mechanism** for its reasoning context. When the OODA loop accumulates a threshold number of consecutive execution failures without any successful state transition, the system scans the accumulated reasoning history to identify the most recent confirmed execution checkpoint — the last turn at which a proposed action was accepted by the EVM and committed to the running state. The reasoning context is **physically truncated** to precisely that checkpoint: all subsequent failed branches are removed from the active message window at the data structure level, not merely instructed to be ignored.

A structured system-level override directive is injected at the truncation point, instructing the reasoning agent to explore an orthogonal region of the attack surface from the last stable execution state. This directive takes effect on a context window that physically no longer contains the contradictory failed attempts — eliminating the tool-call hallucination failure mode that occurs in extended multi-turn sessions where the model attempts to reconcile contradictory prior state evidence.

Accumulated progress is preserved: successful multi-step prefixes that precede the truncation point remain in the active context and in the confirmed call accumulator. Only the failed exploration branch is excised. The result is a search process that systematically prunes dead branches while retaining all earned progress toward exploit completion.

### JIT Semantic Oracle and Live State Parameterization

Many protocol function calls require parameters whose correct values can only be determined after the protocol has reached its operational state. The engine resolves this through **Just-In-Time Semantic Oracle** evaluation. The reasoning agent may annotate any parameter slot with a read instruction specifying a target contract address, a function signature, and arguments. After the setup phase completes and before the attack snapshot is taken, the execution substrate evaluates each probe against the initialized protocol state and caches the result. Attack sequence parameters are substituted with live-evaluated values at execution time.

This mechanism allows the reasoning agent to parameterize attacks with protocol-state-derived values that are definitionally unknowable from static analysis — exchange rates from accumulated reserves, share prices from vault accounting, collateral factors from oracle reads — making complex economic exploits representable and executable without manual parameterization.

### Prefix-Cache-Aligned Concurrent Swarm Architecture

Both the static analysis phase and the dynamic verification phase operate as concurrent multi-agent swarms designed around a shared prefix optimization constraint: maximize shared semantic content at the front of each agent's context window to exploit language model prefix caching.

In the static swarm, all concurrent workers receive an identical extensive shared system prefix comprising the full semantic atlas, deployment registry, out-of-scope rules, and audit constraints. Each worker's unique invariant target is appended as a minimal delta at the very end. In the dynamic verification phase, the first two messages of every reasoning session — the full system prompt and the initial static user message — are constructed once and never modified throughout the session. Dynamic content accumulates exclusively after this immutable prefix. Every turn in every concurrent auditor session begins from a prefix-cache-warmed context, reducing per-turn latency for long multi-step exploit synthesis sessions.

---

## The Architectural Moat

The engine's competitive differentiation is not any single technique. It is the precise, enforced integration of all techniques across a coherent pipeline architecture where each layer's outputs are the exclusive inputs to the next, every data contract is machine-validated at the boundary, and no component can produce results that bypass the physical execution truth gate.

**Code-fact grounding** ensures that every hypothesis traces to a verifiable artifact in the target codebase — not a pattern database, not a vulnerability template, not a framework assumption.

**SAGE's threat-model awareness** ensures that governance operations are contextualized correctly — setup is separated from exploitation, legitimate administrative actions are distinguished from attack vectors, and the engine never produces out-of-scope findings that require admin cooperation.

**Dual-channel verdict coverage** ensures that the full landscape of protocol violations is confirmable — theft, sabotage, invariant destruction, state corruption, DoS — without requiring each vulnerability class to produce measurable extractable profit.

**Physical memory truncation** ensures that the reasoning substrate can explore the non-linear attack surface without accumulating contradictory context that induces hallucinated tool usage.

Static analysis that cannot reach the execution layer produces unverified alerts. Execution infrastructure without semantic grounding generates stochastic noise. LLM reasoning without formal invariant structure produces inconsistent outputs. The engine's architecture makes all three of these failure modes structurally impossible:

The LLM cannot produce code. The IR compiler cannot emit semantically invalid programs. The execution substrate cannot confirm findings that do not pass the OR-gate verdict. The tautology eliminators cannot be bypassed at either stage. The causality decoupling cannot be violated at any layer. The actor identity constraints cannot be circumvented by any topology the schema layer accepts. The SAGE partition cannot place governance operations in adversarial execution lanes.

Security infrastructure at production scale requires this kind of compositional correctness. Individual techniques can be approximated. The systematic, enforced integration cannot.

---

## Operational Positioning

**Engagement model:** The engine accepts a structured YAML audit manifest specifying the target repository, scope constraints, trusted role definitions, known issues, and protocol-authoritative invariants. These invariants are merged with machine-generated invariant targets from the AIG pipeline to form the complete auditor task table. No manual configuration beyond the manifest is required for standard engagements.

**Target compatibility:** The engine operates against any EVM-compatible target — deployed mainnet contracts (via live state forking), pre-deployment contest codebases (via zero-state synthesis), and local Foundry workspaces (via direct AST extraction). The execution mode is determined automatically from target characteristics.

**Execution model:** Static analysis workers and dynamic verification workers run concurrently. Static worker count scales with invariant surface area up to the API concurrency limit. Dynamic worker count is determined by the invariant dispatch table. Both pools are independent and non-blocking.

**Resumption model:** All expensive intermediate artifacts — synthesized protocol states, compiled build-info ASTs, completed auditor findings — are preserved across session boundaries. An interrupted or partially completed engagement resumes from the most recent stable artifact checkpoint without repeating any completed computation.

**Verdict model:** Every finding produced by the dynamic verification phase is accompanied by the specific IR sequence that produced it, the measured economic or invariant violation, the execution trace at the point of confirmation, and the relevant SDMS constraint that was broken or the profit delta that was measured. No finding is produced without this evidence package.

---

## What This Engine Is Not

It is not a linter. It is not a pattern-matcher. It is not a test generator. It is not an alert system that requires a human to triage its output before determining whether the finding is real.

It is an autonomous adversarial verification system. The findings it produces are not suggestions. They are measured violations of formally specified security properties, confirmed by physical EVM execution against realistic protocol state, with fully traceable evidence chains.

The protocols that survive it are genuinely harder to attack. The ones that do not survive it were going to be exploited eventually. The engine simply finds out first.
