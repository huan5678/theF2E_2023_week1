import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1440px',
      },
    },
    fontFamily: {
      sans: ['Noto Sans TC', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      base: [
        '1.125rem',
        {
          lineHeight: '2rem',
          fontWeight: '400',
        },
      ],
    },
    extend: {
      spacing: {
        '1.5': '0.75rem',
        '15': '3.75rem',
      },
      colors: {
        black: '#222222',
        blue: {
          10: '#313A54',
          20: '#38548B',
          30: '#3670C7',
          40: '#6386D1',
          50: '#869DDA',
          60: '#A6B4E4',
          70: '#C4CDED',
          80: '#D9E8FF',
        },
        orange: {
          10: '#533425',
          20: '#854627',
          30: '#B95826',
          40: '#EF6A23',
          50: '#F98950',
          60: '#FFA77B',
          70: '#FFC4A6',
          80: '#FFE1D2',
        },
        gray: {
          20: '#3D3D3D',
          30: '#595959',
          40: '#787878',
          50: '#989898',
          60: '#B9B9B9',
          70: '#DCDCDC',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'base-normal': [
          '1rem',
          {
            lineHeight: '1.5',
            letterSpacing: 'normal',
          },
        ],
        'base-bold': [
          '1.125rem',
          {
            fontWeight: '700',
            lineHeight: '2rem',
          },
        ],
        'base-lg': [
          '1.25rem',
          {
            fontWeight: '500',
            lineHeight: '2rem',
          },
        ],
        h1: [
          '2.5rem',
          {
            fontWeight: '700',
            lineHeight: '3rem',
          },
        ],
        h2: [
          '2rem',
          {
            fontWeight: '700',
            lineHeight: '2.5rem',
          },
        ],
        h3: [
          '1.5rem',
          {
            fontWeight: '700',
            lineHeight: '2rem',
            letterSpacing: '0.125rem',
          },
        ],
        h4: [
          '1.375rem',
          {
            fontWeight: '700',
            lineHeight: '2rem',
            letterSpacing: '0.125rem',
          },
        ],
        h5: [
          '1.125rem',
          {
            fontWeight: '700',
            lineHeight: '1.5625rem',
            letterSpacing: '0.0625rem',
          },
        ],
        footnote: [
          '0.9375rem',
          {
            lineHeight: '1.3125rem',
          },
        ],
        'footnote-bold': [
          '0.9375rem',
          {
            fontWeight: '500',
            lineHeight: '1.3125rem',
          },
        ],
        'footnote-small': [
          '0.875rem',
          {
            lineHeight: '1.1875rem',
          },
        ],
        btn: [
          '0.875rem',
          {
            fontWeight: '700',
            lineHeight: '1.5rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
