'use client';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Noto_Sans_Thai } from 'next/font/google';
import { useEffect, useState } from 'react';

const notoSans = Noto_Sans_Thai({ subsets: ['latin', 'thai'] });
const muiTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette: {
    action: {
      active: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(255, 255, 255, 1)',
    },
    primary: {
      main: 'rgba(173, 202, 49, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.082)',
      contrastText: 'rgba(0, 0, 0, 0.475)',
    },
    success: {
      main: 'rgba(18, 158, 57, 1)',
      contrastText: 'rgba(18, 158, 57, 1)',
    },
    info: {
      main: 'rgba(255, 255, 255, 1)',
      contrastText: 'rgba(0, 0, 0, 1)',
    },
    warning: {
      main: 'rgba(255, 152, 0, 1)',
      contrastText: 'rgba(0, 0, 0, 1)',
    },
    error: {
      main: 'rgba(227, 45, 45, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    text: {
      primary: 'rgba(61, 61, 61, 1)',
      secondary: 'rgba(0, 0, 0, 0.475)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '1.25rem',
          background: `${theme.vars.palette.background.default} !important`,
          color: `${theme.vars.palette.primary.main} !important`,
          position: 'fixed',
          width: 'calc(100% - 2rem)',
          top: 30,
          height: '55px',
          left: '50%',
          transform: 'translateX(-50%)',
          [theme.breakpoints.up('lg')]: {
            width: 'calc(100% - 16rem)',
          },
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: () => ({
          padding: '12px 0px',
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(43,44,49,1)!important',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        loadingPosition: 'start',
      },
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          lineHeight: '2rem',
          textTransform: 'none',
          height: '2rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.primary.main,
        }),
      },
    },
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
      styleOverrides: (theme) => ({
        ':root': {
          '--primary-main': theme.palette.primary.main,
          '--primary-contrastText': theme.palette.primary.contrastText,
          '--secondary-main': theme.palette.secondary.main,
          '--secondary-contrastText': theme.palette.secondary.contrastText,
          '--success-main': theme.palette.success.main,
          '--success-contrastText': theme.palette.success.contrastText,
          '--info-main': theme.palette.info.main,
          '--info-contrastText': theme.palette.info.contrastText,
          '--warning-main': theme.palette.warning.main,
          '--warning-contrastText': theme.palette.warning.contrastText,
          '--error-main': theme.palette.error.main,
          '--error-contrastText': theme.palette.error.contrastText,
          '--text-primary': theme.palette.text.primary,
          '--text-secondary': theme.palette.text.secondary,
          '--text-disabled': theme.palette.text.disabled,
          '--background-default': theme.palette.background.default,
          '--background-paper': theme.palette.background.paper,
        },
        'input:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 30px ${theme.vars.palette.background.default} inset !important`,
        },
        'input::-ms-clear, input::-ms-reveal': {
          display: 'none',
        },
      }),
    },
    MuiDialog: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          borderRadius: '0.75rem',
          border: 'none',
        },
        paper: ({ theme }) => ({
          padding: 0,
          background: theme.palette.background.default,
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
      },
    },
    MuiFab: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: { height: '1rem', lineHeight: '1rem', marginTop: '0' },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.default,
          borderRadius: '1rem !important',
          fontSize: theme.typography.subtitle2.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          height: '2.75rem',
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.default,
          borderRadius: '1rem !important',
          fontSize: theme.typography.subtitle2.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          height: '2.75rem',
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem !important',
          background: 'transparent',
          borderBottomColor: 'white',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
        component: 'button',
      },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: '0.5rem' } } },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '0.5rem',
        }),
      },
    },
    MuiRating: {
      styleOverrides: {
        iconEmpty: {
          color: '#888888',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '0.75rem',
          fontSize: theme.typography.subtitle2.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          height: '3rem',
        }),
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          borderBottom: `1.5px solid ${theme.palette.background.default}`,
          borderRadius: '0.75rem',
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '55px !important',
          '@media (min-width:600px)': {
            minHeight: '55px !important',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          whiteSpace: 'pre-line',
        },
      },
    },
  },
  typography: {
    fontFamily: notoSans.style.fontFamily,
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    h1: { fontSize: '6rem' },
    h2: { fontSize: '3.75rem' },
    h3: { fontSize: '2.75rem' },
    h4: { fontSize: '2rem' },
    h5: { fontSize: '1.5rem' },
    h6: { fontSize: '1.25rem' },
    subtitle1: { fontSize: '1rem' },
    subtitle2: { fontSize: '0.875rem' },
    body1: { fontSize: '0.75rem' },
    body2: { fontSize: '0.625rem' },
    caption: { fontSize: '0.625rem' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1280,
      xl: 1536,
    },
  },
});

export default function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
