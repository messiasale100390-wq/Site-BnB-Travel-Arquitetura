import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        // BnB Travel brand tokens
        navy: {
          DEFAULT: "#2F3E46",
          dark: "#232E34",
          soft: "#3F5058",
        },
        gold: {
          DEFAULT: "#C6A77D",
          dark: "#B1936A",
          // Tom mais escuro, reservado para TEXTO dourado sobre fundo claro
          // (rótulos, links) — "gold-dark" sozinho mede ~2.5:1 de contraste
          // sobre o cream, abaixo do mínimo de acessibilidade (4.5:1); este
          // tom mede ~5.3:1, mantendo a família de cor da marca.
          deep: "#7A5C3A",
        },
        cream: {
          DEFAULT: "#F5EDE6",
          soft: "#FAF6F2",
        },
        sand: "#D6CABC",

        // shadcn/ui semantic tokens (mapped to CSS variables)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
