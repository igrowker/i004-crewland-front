import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CE9DF9",
        primaryHover: "#B771F5",
        customWhite: "#F2F2F2",
        customYellow: "#FFED61",
        customYellowHover: "#FCE427",
        background: "#03071E",
        customGray: "#B7B7B8",
        customRed: "#FA8080",
        customGreen: "#26874A",
        customBlue: "##62C0FA",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        title: ["var(--font-title)", "serif"],
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "1.3" }],
        h2: ["2.5rem", { lineHeight: "1.2" }],
        h3: ["2rem", { lineHeight: "1.2" }],
        h4: ["1.5rem", { lineHeight: "1.2" }],
        h5: ["1.25rem", { lineHeight: "1" }],
        bodyMd: ["1rem", { lineHeight: "1" }],
        bodySm: ["0.875rem", { lineHeight: "0.9" }],
        quote: ["0.625rem", { lineHeight: "0.8" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
