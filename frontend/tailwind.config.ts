import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007BFF",
          dark: "#0056b3",
          light: "#E5F2FF",
        },
        enterprise: {
          900: "#0f172a",
          800: "#1e293b",
          100: "#f1f5f9",
        }
      },
    },
  },
  plugins: [],
};
export default config;

