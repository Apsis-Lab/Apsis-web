import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#0B0E14",
          deep: "#060810",
          surface: "#111620",
        },
        accent: {
          DEFAULT: "#FF6B00",
          muted: "#FF6B0033",
          glow: "#FF6B0018",
        },
        ice: {
          DEFAULT: "#38BDF8",
          muted: "#38BDF833",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.06)",
          DEFAULT: "rgba(255, 255, 255, 0.10)",
          strong: "rgba(255, 255, 255, 0.16)",
        },
        muted: {
          DEFAULT: "#94A3B8",
          dim: "#64748B",
          faint: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "edge-accent": "0 0 0 1px rgba(255, 107, 0, 0.35), inset 0 0 0 1px rgba(255, 107, 0, 0.08)",
        "edge-ice": "0 0 0 1px rgba(56, 189, 248, 0.25), inset 0 0 0 1px rgba(56, 189, 248, 0.06)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
    },
  },
};

export default config;
