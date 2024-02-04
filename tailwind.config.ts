import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        emerald: {
          "50": "#eefbf1",
          "100": "#d7f4dd",
          "200": "#b1e9bf",
          "300": "#7ed79b",
          "400": "#61c685",
          "500": "#27a257",
          "600": "#198245",
          "700": "#146839",
          "800": "#12532f",
          "900": "#104428",
          "950": "#082617",
        },
        ottoman: {
          "50": "#f4f9f4",
          "100": "#e4f2e7",
          "200": "#cde5d2",
          "300": "#a5d0ae",
          "400": "#75b384",
          "500": "#529562",
          "600": "#3f7a4d",
          "700": "#34613f",
          "800": "#2d4e36",
          "900": "#26412e",
          "950": "#112216",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
