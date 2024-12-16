/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Custom colors for a clean white & black website
        background: "#FFFFFF", // Pure white background
        primary: "#242424", // Pure black for primary elements like text and headings
        text: "#1A1A1A", // Near-black for readable body text (softer on the eyes)
        highlight: "#F97316", // Optional highlight color (can be used for buttons, status, etc.)
        secondary: "#666666", // Softer gray for subtitles, placeholders, etc.
      },
      fontFamily: {
        heading: ["Bebas Neue", "sans-serif"], // For titles and headings
        // body: ["Poppins", "sans-serif"], // For body text and paragraphs
        sans: ["Inter", "sans-serif"], // For general sans-serif font usage
      },
    },
  },
  plugins: [],
};

// py-8 md:py-12
