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
        'blue-color': "#101828",
        'blue-shade-1': '#1D2939',
        'blue-shade-2': '#667085',
        'green-color': '#9FF443'
      },
    },
  },
  plugins: [],
} satisfies Config;
