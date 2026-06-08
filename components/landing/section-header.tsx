type PageTopBarProps = {
  sysInit: string;
  brand: string;
  operational: string;
};

export function PageTopBar({ sysInit, brand, operational }: PageTopBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-7 md:pb-8">
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        <span className="page-tag-badge text-muted">
          [ {sysInit} ]
        </span>
        <span className="page-brand">{brand}</span>
      </div>

      <div className="flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="page-status">{operational}</span>
      </div>
    </div>
  );
}

type PageModuleBarProps = {
  moduleLabel: string;
  entryPoint: string;
};

export function PageModuleBar({ moduleLabel, entryPoint }: PageModuleBarProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-4 md:mb-10 md:gap-5">
      <span className="page-tag-badge text-white/80">
        [ {moduleLabel} ]
      </span>
      <span className="page-meta-title">{entryPoint}</span>
    </div>
  );
}

type SectionHeaderProps = {
  tag: string;
  meta: string;
  size?: "lg" | "md";
};

export function SectionHeader({ tag, meta, size = "lg" }: SectionHeaderProps) {
  const hasMeta = meta.trim().length > 0;

  return (
    <div
      className={`flex flex-wrap items-center gap-4 md:gap-5 ${
        size === "lg" ? "mb-7 md:mb-8" : "mb-6 md:mb-7"
      }`}
    >
      <span className="page-tag-badge text-white/75">
        [ {tag} ]
      </span>
      {hasMeta && (
        <span
          className={
            size === "lg" ? "page-meta-title" : "page-meta-subtitle"
          }
        >
          {meta}
        </span>
      )}
    </div>
  );
}
