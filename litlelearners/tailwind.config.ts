import type { Config } from "tailwindcss"

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
        fontmain: "var(--fontmain)",
        "grey-15": "var(--grey-15)",
        white: "var(--white)",
        "orange-80": "var(--orange-80)",
        "grey-20": "var(--grey-20)",
        "orange- 90": "var(--orange-90)",
        "grey-10": "var(--grey-10)",
        "orange-65": "var(--orange-65)",
        "orange-97": "var(--orange-97)",
        "orange-70": "var(--orange-70)",
        "grey-30": "var(--grey-30)",
        "orange-95": "var(--orange-95)",
        "grey-40": "var(--grey-40)",
        "orange-75": "var(--orange-75)",
      },
    },
  },
  plugins: [],
} satisfies Config
