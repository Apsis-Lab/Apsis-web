"use client";

import type { ApsisContent } from "@/lib/apsis-content";

type VizContent = ApsisContent["hero"]["viz"];

/** SVG connector paths — viewBox 0 0 300 120, mapped to full overlay */
const CONNECTORS = [
  { d: "M 94 28 L 106 28", color: "#00ff41", dur: "2s", delay: "0s" },
  { d: "M 94 60 L 106 60", color: "#22d3ee", dur: "2.4s", delay: "0.4s" },
  { d: "M 94 92 L 106 92", color: "#00ff41", dur: "2.8s", delay: "0.8s" },
  { d: "M 194 28 L 206 28", color: "#00ff41", dur: "2.2s", delay: "0.2s" },
  { d: "M 194 60 L 206 60", color: "#22d3ee", dur: "2.6s", delay: "0.6s" },
  { d: "M 194 92 L 206 92", color: "#00ff41", dur: "3s", delay: "1s" },
  /* feedback loop: execution back toward OODA */
  { d: "M 250 100 C 200 110, 120 110, 50 100", color: "#22d3ee", dur: "4s", delay: "1.5s" },
] as const;

export function ExecutionBridgeViz({ viz }: { viz: VizContent }) {
  const agentA = viz.agents.find((a) => a.id === "agent_a");
  const agentB = viz.agents.find((a) => a.id === "agent_b");
  const agentC = viz.agents.find((a) => a.id === "agent_c");

  return (
    <div
      className="flex flex-col border border-border bg-void-surface"
      aria-hidden
    >
      <div className="flex shrink-0 items-center gap-1.5 border-b border-border px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="ml-2 font-mono text-[11px] text-muted-faint">
          {viz.title}
        </span>
        <span className="ml-auto font-mono text-[10px] tracking-wider text-neon-green">
          LIVE
        </span>
      </div>

      <div className="relative min-h-[320px] p-3 sm:min-h-[340px] sm:p-4">
        <div className="pointer-events-none absolute inset-3 grid-bg opacity-50 sm:inset-4" />

        {/* SVG flow overlay — dashed lines + glowing particles */}
        <svg
          className="pointer-events-none absolute inset-3 z-10 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] sm:inset-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100%-2rem)]"
          viewBox="0 0 300 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="vizGlowGreen" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="vizGlowCyan" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="0.9" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {CONNECTORS.map((conn) => (
            <g key={conn.d}>
              <path
                d={conn.d}
                fill="none"
                stroke={conn.color}
                strokeWidth="0.75"
                strokeOpacity="0.35"
                strokeDasharray="3 4"
                className="bridge-flow-line"
                style={{ animationDelay: conn.delay }}
              />
              <circle
                r="1.25"
                fill={conn.color}
                fillOpacity="0.9"
                filter={conn.color === "#22d3ee" ? "url(#vizGlowCyan)" : "url(#vizGlowGreen)"}
              >
                <animateMotion
                  dur={conn.dur}
                  repeatCount="indefinite"
                  begin={conn.delay}
                  path={conn.d}
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.08;0.92;1"
                  dur={conn.dur}
                  repeatCount="indefinite"
                  begin={conn.delay}
                />
              </circle>
            </g>
          ))}
        </svg>

        <div className="relative z-20 grid h-full grid-cols-3 gap-2 sm:gap-3">
          {/* ── OODA LOOP ── */}
          <ColumnShell label={viz.colHypothesis}>
            <div className="mb-2 border border-neon-cyan/30 bg-neon-cyan/5 px-2 py-1.5">
              <p className="font-mono text-[9px] leading-snug text-neon-cyan sm:text-[10px]">
                {viz.colliderInput}
              </p>
            </div>

            <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-muted-faint">
              {viz.oodaHubLabel}
            </p>

            <div className="flex flex-col gap-1">
              {[agentA, agentB].filter(Boolean).map((agent, i) => (
                <div key={agent!.id}>
                  {i > 0 && (
                    <p className="py-0.5 text-center font-mono text-[10px] text-neon-green/50">
                      ↓
                    </p>
                  )}
                  <AgentRow
                    label={agent!.label}
                    role={agent!.role}
                    dotClass="bg-neon-green"
                  />
                </div>
              ))}
            </div>

            <p className="mt-2 text-center font-mono text-[10px] text-neon-green/40">
              ↓ IR
            </p>

            {agentC && (
              <div className="mt-auto border-t border-dashed border-border pt-2">
                <p className="mb-1 font-mono text-[8px] uppercase tracking-wider text-muted-faint">
                  loop close
                </p>
                <AgentRow
                  label={agentC.label}
                  role={agentC.role}
                  dotClass="bg-neon-cyan"
                  muted
                />
                <p className="mt-1 font-mono text-[9px] text-neon-cyan/70">
                  {viz.agentCFeedback}
                </p>
              </div>
            )}
          </ColumnShell>

          {/* ── IR BRIDGE ── */}
          <ColumnShell label={viz.colBridge} accent>
            <div className="flex flex-1 flex-col gap-1.5 font-mono text-[10px] leading-relaxed sm:text-[11px]">
              {viz.bridgeLines.map((line, i) => (
                <p
                  key={line}
                  className={`bridge-line ${
                    i === viz.bridgeLines.length - 1
                      ? "text-neon-green"
                      : "text-muted"
                  }`}
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  <span className="text-muted-faint">{">"}</span> {line}
                </p>
              ))}
              <span className="bridge-cursor mt-1 inline-block h-3.5 w-1.5 bg-neon-green" />
            </div>

            <div className="mt-auto border-t border-border pt-2">
              {viz.scripts.map((script) => (
                <span
                  key={script}
                  className="block font-mono text-[9px] text-muted-faint sm:text-[10px]"
                >
                  {script}
                </span>
              ))}
            </div>
          </ColumnShell>

          {/* ── REVM EXEC ── */}
          <ColumnShell label={viz.colExecution}>
            <div className="border border-border bg-black/50 p-2">
              <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-neon-green/70">
                {viz.executionMode}
              </p>
              <ul className="flex flex-col gap-1">
                {viz.executionSteps.map((step, i) => (
                  <li
                    key={step}
                    className={`bridge-line font-mono text-[9px] leading-snug sm:text-[10px] ${
                      i === viz.executionSteps.length - 1
                        ? "text-neon-green"
                        : "text-muted-dim"
                    }`}
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <span className="text-muted-faint">
                      {i === viz.executionSteps.length - 1 ? "!" : "·"}
                    </span>{" "}
                    {step}
                  </li>
                ))}
              </ul>

              {/* State diff strip — not a bare grid */}
              <div className="mt-2 border border-border/80 bg-void-elevated px-2 py-1.5">
                <p className="font-mono text-[8px] text-muted-faint">
                  slot[0x4a2…f1e]
                </p>
                <p className="font-mono text-[9px] text-zinc-400">
                  <span className="text-muted-faint">1.00e18</span>
                  <span className="mx-1 text-neon-green">→</span>
                  <span className="text-neon-green">0</span>
                </p>
                <p className="font-mono text-[8px] text-muted-faint">
                  trace · 4 calls · 2 logs
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-col items-center justify-center border border-neon-green/35 bg-void-elevated px-2 py-3 text-center">
              <div className="mb-2 flex w-full items-center justify-between px-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-faint">
                  {viz.verdictLabel}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-neon-green shadow-[0_0_10px_#00ff41] node-pulse" />
              </div>
              <p className="font-mono text-[11px] font-semibold tracking-wide text-neon-green sm:text-xs">
                {viz.verdict}
              </p>
              <p className="mt-1 font-mono text-[10px] text-zinc-400">
                {viz.verdictSub}
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-neon-cyan">
                {viz.verdictTag}
              </p>
            </div>
          </ColumnShell>
        </div>
      </div>
    </div>
  );
}

function AgentRow({
  label,
  role,
  dotClass,
  muted,
}: {
  label: string;
  role: string;
  dotClass: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-2 border border-border px-2 py-1.5 ${
        muted ? "bg-void-elevated/50" : "bg-void-elevated"
      }`}
    >
      <span
        className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${dotClass} shadow-[0_0_8px_currentColor] node-pulse`}
      />
      <div className="min-w-0">
        <p className="font-mono text-[10px] leading-snug text-zinc-300 sm:text-[11px]">
          {label}
        </p>
        <p className="font-mono text-[8px] text-muted-faint">{role}</p>
      </div>
    </div>
  );
}

function ColumnShell({
  label,
  accent,
  children,
}: {
  label: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex min-h-[280px] flex-col border bg-[#0a0a0a]/95 p-2.5 sm:min-h-[300px] sm:p-3 ${
        accent
          ? "border-neon-green/30 shadow-[inset_0_0_32px_rgba(0,255,65,0.06)]"
          : "border-border"
      }`}
    >
      <p
        className={`mb-2.5 shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] sm:text-[11px] ${
          accent ? "text-neon-green" : "text-muted-dim"
        }`}
      >
        {label}
      </p>
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
