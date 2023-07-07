/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fade-in-down 1s 80ms ease-in-out forwards",
        "fade-in-blur": "fade-in-blur 1s ease-in-out forwards",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-blur": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
            filter: "blur(20px)",
            scale: "0.95",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
            scale: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
