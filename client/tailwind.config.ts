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
        'gray-color': '#D0D5DD',
        'blue-color': "#101828",
        'blue-shade-1': '#1D2939',
        'blue-shade-2': '#667085',
        'blue-shade-3': '#253BFF',
        'green-color': '#9FF443'
      },
    },
  },
  plugins: [],
} satisfies Config;
