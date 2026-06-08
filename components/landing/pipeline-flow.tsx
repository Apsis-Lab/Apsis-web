"use client";

export type PipelineFlowLabels = {
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

type PipelineFlowProps = {
  labels: PipelineFlowLabels;
};

function StageNode({
  label,
  accent = false,
  compact = false,
}: {
  label: string;
  accent?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`border px-2 py-1 text-center font-mono leading-tight ${
        accent
          ? "border-accent/35 bg-accent/10 text-accent"
          : "border-white/10 bg-white/[0.03] text-white/70"
      } ${compact ? "text-[9px]" : "text-[10px]"}`}
    >
      {label}
    </div>
  );
}

function FlowArrow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center text-muted-faint ${className}`}
    >
      <span className="font-mono text-[10px]">↓</span>
    </div>
  );
}

export function PipelineFlow({ labels }: PipelineFlowProps) {
  return (
    <div className="mt-auto border-t border-white/[0.06] pt-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="mono-label text-muted-dim">{labels.title}</span>
        <div className="flex gap-2">
          <span className="mono-label text-ice/80">{labels.python}</span>
          <span className="text-muted-faint">/</span>
          <span className="mono-label text-accent/80">{labels.rust}</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 gap-y-1">
        <div className="col-span-3">
          <StageNode label={labels.target} />
          <FlowArrow />
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-1.5">
          <StageNode label={labels.ingest} compact />
          <StageNode label={labels.compile} compact />
          <StageNode label={labels.atlas} compact />
        </div>

        <FlowArrow className="col-span-3" />

        <div className="space-y-1.5">
          <span className="mono-label block text-[9px] text-ice/60">
            {labels.trackA}
          </span>
          <StageNode label={labels.whitebox} compact />
          <FlowArrow />
          <StageNode label={labels.staticReport} accent compact />
        </div>

        <FlowArrow className="self-center" />

        <div className="space-y-1.5">
          <span className="mono-label block text-[9px] text-accent/60">
            {labels.trackB}
          </span>
          <div className="grid grid-cols-3 gap-1">
            <StageNode label={labels.verify} compact />
            <StageNode label={labels.irCompile} compact />
            <StageNode label={labels.execute} compact />
          </div>
          <FlowArrow />
          <StageNode label={labels.profitGate} accent compact />
          <div className="grid grid-cols-2 gap-1">
            <StageNode label={labels.vulnerable} compact />
            <StageNode label={labels.reflect} compact />
          </div>
        </div>
      </div>
    </div>
  );
}
