
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        md: "0.5rem",
      },
      colors: {
        background: "hsl(0, 0%, 100%)",
        primary: "hsl(222.2, 47.4%, 11.2%)",
        secondary: "hsl(210, 40%, 96.1%)",
        accent: "hsl(210, 40%, 96.1%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        dark: {
          background: "hsl(222.2, 84%, 4.9%)",
          primary: "hsl(210, 40%, 98%)",
          secondary: "hsl(217.2, 32.6%, 17.5%)",
          sidebar: "hsl(224.3, 76.3%, 48%)"
        }
      }
    }
  },
  plugins: []
};
