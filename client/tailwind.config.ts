import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gray-color': '#D0D5DD',
        'blue-color': "#101828",
        'blue-shade-1': '#1D2939',
        'blue-shade-2': '#667085',
        'blue-shade-3': '#253BFF',
        'blue-shade-4': '#475467',
        'blue-shade-5': '#1D2939',
        'blue-shade-6': '#475467',
        'blue-shade-7': '#98A2B3',
        'green-color': '#9FF443',
        'white-shade': '#F9FAFB',
        'gray-shade': '#D0D5DD',
      },
    },
  },
  plugins: [],
} satisfies Config;
