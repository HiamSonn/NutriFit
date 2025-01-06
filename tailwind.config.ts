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
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkgreen:'#007271',
        gray:'#757575',
        grayborder:'#E0E0E0',
        lightgreen:'#4AB7B6',
        lightgray:'#F0F0F0',
      },
    },
  },
  plugins: [],
} satisfies Config;
