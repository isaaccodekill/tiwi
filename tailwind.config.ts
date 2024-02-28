import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        serif: ["COCOGOOSE", "serif"],
      },
      colors: {
        blue: {
          100: '#4467FF',
        },
        pink: {
          100: "#FF93D6"
        },
        yellow: {
          100: "#fffac4",
          200: "#fefe08",
        }
      },
      backgroundImage: {
        "gradient-landing": "linear-gradient(180deg, #fffac4 0%, #fefe08 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
