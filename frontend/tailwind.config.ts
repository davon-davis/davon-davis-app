/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,tsx,ts,js.css}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
