/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Custom colors for your Mobile Legends site
        background: "#0F172A", // Dark Blue-Black for background
        primary: "#0A1122", // Electric Blue for navbar, buttons, and accents
        text: "#E5E7EB", // Off-White/Light Gray for text
        highlight: "#F97316", // Neon Orange for status, notifications, etc.
        secondary: "#A855F7", // Soft Purple for optional highlights
      },
      fontFamily: {
        heading: ["Bebas Neue", "sans-serif"], // For titles and headings
        body: ["Poppins", "sans-serif"], // For body text and paragraphs
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
