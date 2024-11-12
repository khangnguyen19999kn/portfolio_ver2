import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        card: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBxBhVkvEz_D6NxdlD1mMj6Ja-rkvfheIHw&s')",
      },
      width: {
        card: "350px",
      },
      height: {
        card: "350px",
      },
      colors: {
        "orange-white": "#f9f1ec",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        mobile: { min: "320px", max: "639px" },
        // => @media (min-width: 320px) { ... }
        // '@media (min-width: 320px) and (max-width: 639px)'
        tablet: { min: "640px", max: "1279px" },
        // => @media (min-width: 640px) { ... }
        // '@media (min-width: 640px) and (max-width: 1279px)'

        laptop: { min: "1279px", max: "1919px" },
        // => @media (min-width: 1024px) { ... }
        // '@media (min-width: 1279px) and (max-width: 1919px)'

        desktop: "1920px",
        // => @media (min-width: 1280px) { ... }
        // '@media (min-width: 1920px)'
        bigDesktop: "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [tailwindAnimate],
};
