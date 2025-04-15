import { createTheme } from '@mui/material';
import type { Config } from 'tailwindcss';

const muiTheme = createTheme();

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          main: 'var(--primary-main)',
          contrastText: 'var(--primary-contrastText)',
        },
        secondary: {
          main: 'var(--secondary-main)',
          contrastText: 'var(--secondary-contrastText)',
        },
        success: {
          main: 'var(--success-main)',
          contrastText: 'var(--success-contrastText)',
        },
        info: {
          main: 'var(--info-main)',
          contrastText: 'var(--info-contrastText)',
        },
        warning: {
          main: 'var(--warning-main)',
          contrastText: 'var(--warning-contrastText)',
        },
        error: {
          main: 'var(--error-main)',
          contrastText: 'var(--error-contrastText)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          disabled: 'var(--text-disabled)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
