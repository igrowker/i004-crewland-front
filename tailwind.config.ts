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
        customWhite: "#F2F2F2",
        customGray: "#B7B7B8",
        customYellow: "#FFED61",
        background: "#03071E",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        title: ["Unbounded", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
