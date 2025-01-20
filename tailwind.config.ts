import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-radial-sm': 'radial-gradient(circle at 30% 40%, #E15025 0%, #E15025 24%, #0A0A0A 30%)',
        'custom-radial-md': 'radial-gradient(circle at 40% 50%, #E15025 0%, #E15025 24%, #0A0A0A 30%)',
        'custom-radial-lg': 'radial-gradient(circle at 50% 60%, #E15025 0%, #E15025 24%, #0A0A0A 30%)',
      },
    },
    screens: {
      'sm': '425px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
