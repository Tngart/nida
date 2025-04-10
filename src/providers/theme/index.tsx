"use client";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";
import { useEffect, useState } from "react";

const notoSans = Noto_Sans_Thai({ subsets: ["latin", "thai"] });
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        action: {
          active: "rgba(0, 0, 0, 0.6)",
          disabled: "rgba(255, 255, 255, 1)",
        },
        primary: {
          main: "rgba(173, 202, 49, 1)",
          contrastText: "rgba(255, 255, 255, 1)",
        },
        secondary: {
          main: "rgba(0, 0, 0, 0.082)",
          contrastText: "rgba(0, 0, 0, 0.475)",
        },
        success: {
          main: "rgba(18, 158, 57, 1)",
          contrastText: "rgba(18, 158, 57, 1)",
        },
        info: {
          main: "rgba(0, 0, 255, 0.6)",
          contrastText: "rgba(255, 255, 255, 1)",
        },
        warning: {
          main: "rgba(255, 152, 0, 1)",
          contrastText: "rgba(0, 0, 0, 1)",
        },
        error: {
          main: "rgba(227, 45, 45, 1)",
          contrastText: "rgba(255, 255, 255, 1)",
        },
        text: {
          primary: "rgba(0, 0, 0, 1)",
          secondary: "rgba(0, 0, 0, 0.475)",
          disabled: "rgba(0, 0, 0, 0.38)",
        },
      },
    },
    dark: {
      palette: {
        action: {
          active: "rgba(255, 255, 255, 0.6)",
          disabled: "rgba(0, 0, 0, 1)",
        },
        background: { paper: "rgba(29, 29, 29, 1)" },
        primary: {
          main: "rgba(0 ,226, 0, 1)",
          contrastText: "rgba(255, 255, 255, 1)",
        },
        secondary: {
          main: "rgba(255, 255, 255, 0.082)",
          contrastText: "rgba(134, 134, 134, 1)",
        },
        success: {
          main: "rgba(18, 158, 57, 1)",
          contrastText: "rgba(18, 158, 57, 1)",
        },
        info: {
          main: "rgba(0, 0, 255, 0.6)",
          contrastText: "rgba(255, 255, 255, 1)",
        },
        warning: {
          main: "rgba(255, 152, 0, 1)",
          contrastText: "rgba(0, 0, 0, 1)",
        },
        error: {
          main: "rgba(227, 45, 45, 1)",
          contrastText: "rgba(255, 255, 255, 1)",
        },
        text: {
          primary: "rgba(255, 255, 255, 0.96)",
          secondary: "rgba(255, 255, 255, 0.475)",
          disabled: "rgba(255, 255, 255, 0.38)",
        },
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: `${theme.vars.palette.background.default} !important`,
          borderRadius: "0",
          boxShadow: "none",
          color: `${theme.vars.palette.primary.main} !important`,
          height: "59px",
          position: "sticky",
          top: 0,
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: () => ({
          padding: "12px 0px",
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
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        loadingPosition: "start",
      },
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
          lineHeight: "2rem",
          textTransform: "none",
          height: "2.5rem",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
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
        ":root": {
          "--primary-main": theme.palette.primary.main,
          "--primary-contrastText": theme.palette.primary.contrastText,
          "--secondary-main": theme.palette.secondary.main,
          "--secondary-contrastText": theme.palette.secondary.contrastText,
          "--text-primary": theme.palette.text.primary,
          "--text-secondary": theme.palette.text.secondary,
          "--text-disabled": theme.palette.text.disabled,
          "--background-default": theme.palette.background.default,
          "--background-paper": theme.palette.background.paper,
        },
        "input:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 30px ${theme.vars.palette.background.default} inset !important`,
        },
        "input::-ms-clear, input::-ms-reveal": {
          display: "none",
        },
      }),
    },
    MuiDialog: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
          border: "none",
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
          padding: "16px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiFab: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: { height: "1rem", lineHeight: "1rem", marginTop: "0" },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0.75rem !important",
          fontSize: theme.typography.subtitle2.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          height: "3rem",
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0.75rem !important",
          fontSize: theme.typography.subtitle2.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          height: "3rem",
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem !important",
          background: "transparent",
          borderBottomColor: "white",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
        component: "button",
      },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: "0.5rem" } } },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0.5rem",
          borderColor: theme.palette.primary.main,
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0.75rem",
          fontSize: theme.typography.subtitle2.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          height: "3rem",
        }),
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          borderBottom: `1.5px solid ${theme.palette.background.default}`,
          borderRadius: "0.75rem",
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: { paddingLeft: "1.5rem", paddingRight: "1.5rem" },
      },
    },
  },
  typography: {
    fontFamily: notoSans.style.fontFamily,
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    h5: { fontSize: "1.5rem" },
    h6: { fontSize: "1.25rem" },
    subtitle1: { fontSize: "1rem" },
    subtitle2: { fontSize: "0.875rem" },
    body1: { fontSize: "0.75rem" },
    body2: { fontSize: "0.625rem" },
    caption: { fontSize: "0.625rem" },
  },
});

export default function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
