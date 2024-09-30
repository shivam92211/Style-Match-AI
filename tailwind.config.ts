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
        background: "var(--background)",
        foreground: "var(--foreground)",
        olive: '#808000', // Olive color hex
        sage: '#77815c',  // Sage green color hex
        pastelBlue: '#b3cde0',  // Custom pastel blue
        softPink: '#f7cac9',
        softPinkDark: '#e0a5a5',
        mint:'#a8e6cf',
        charcoal: '#333333',
        darkBlue: '#003366'
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
