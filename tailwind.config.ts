import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#000000",
          surface: "#0a0a0a",
          elevated: "#111111",
        },
        border: {
          DEFAULT: "#27272a",
          subtle: "#1f1f23",
        },
        neon: {
          green: "#00ff41",
          cyan: "#22d3ee",
        },
        muted: {
          DEFAULT: "#a1a1aa",
          dim: "#71717a",
          faint: "#52525b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "neon-green": "0 0 20px rgba(0, 255, 65, 0.15)",
        "neon-cyan": "0 0 20px rgba(34, 211, 238, 0.12)",
      },
    },
  },
};

export default config;
