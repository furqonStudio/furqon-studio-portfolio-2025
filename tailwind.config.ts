import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Background Colors
    'bg-yellow-400',
    'bg-green-500',
    'bg-blue-500',
    'bg-red-500',
    'bg-lime-400',
    'bg-violet-500',

    // Class Names
    'md:row-span-2',
    'md:col-span-2',
    'md:col-span-2 md:h-44',

    // Image Class Names
    'left-1/2',
    'translate-x-[-50%]',
    'mt-8',
    'w-52',
    'rounded-xl',
    'md:w-32',
    'md:rounded-lg',
    'md:mt-4',
    'w-64',
    'w-72',
    'rounded',
    'translate-y-[50%]',
    'scale-150',
    'rounded-md',

    'mt-20',
    'ml-24',
    'md:scale-100',
    'md:ml-0',
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 1s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        gasoek: 'var(--font-gasoek)',
      },
    },
  },
  plugins: [],
}
export default config
