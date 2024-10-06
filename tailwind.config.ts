import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        srmsigkdd: "#6d4d34", 
        srmsigkdd2: "#b8936f",
        srmsigkddtext: "#d1d1bf",
        srmsigkddbutton: "#b59b7a",
        srmsigkddborder: "#796550",
      },
    },
  },
  plugins: [],
};
export default config;