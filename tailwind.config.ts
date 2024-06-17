import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend:{
      colors:{
        'dankook':{
          'DEFAULT': '#045195',
        }
      }

    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "70rem",
      },
    },},
  plugins: [],
};
export default config;
