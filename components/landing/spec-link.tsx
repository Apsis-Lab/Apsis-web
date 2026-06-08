import { ArrowDownRight, ArrowUpLeft } from "lucide-react";

export function ReadSpecLink({
  index,
  label,
}: {
  index: number;
  label: string;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="mt-6 flex items-center gap-3 border border-accent/25 bg-accent/[0.06] px-3 py-2.5 transition-colors group-hover:border-accent/45 group-hover:bg-accent/10">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-accent/40 bg-accent/15 font-sans text-xs font-bold text-accent">
        {num}
      </span>
      <span className="flex-1 font-sans text-xs font-medium tracking-wide text-white/85">
        {label}
      </span>
      <ArrowDownRight
        className="h-3.5 w-3.5 shrink-0 text-accent"
        strokeWidth={2}
      />
    </div>
  );
}

export function BackToGridLink({
  index,
  label,
}: {
  index: number;
  label: string;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href="#technologies"
      className="inline-flex items-center gap-2.5 border border-accent/30 bg-accent/[0.08] px-3 py-2 transition-colors hover:border-accent/50 hover:bg-accent/15"
    >
      <ArrowUpLeft className="h-3 w-3 text-accent" strokeWidth={2} />
      <span className="font-sans text-xs font-semibold text-white/90">
        {label}
      </span>
      <span className="font-mono text-[11px] font-bold text-accent">{num}</span>
    </a>
  );
}
