import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// Color design tokens
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#171717',
          200: '#262626',
          300: '#404040',
          400: '#525252',
          500: '#737373',
          600: '#a3a3a3',
          700: '#d4d4d4',
          800: '#e5e5e5',
          900: '#f5f5f5',
        },
        primary: {
          100: '#0f172a',
          200: '#1e293b',
          300: '#334155',
          400: '#475569',
          500: '#64748b',
          600: '#94a3b8',
          700: '#cbd5e1',
          800: '#e2e8f0',
          900: '#f1f5f9',
        },
        greenAccent: {
          100: '#134e4a',
          200: '#115e59',
          300: '#0f766e',
          400: '#0d9488',
          500: '#14b8a6', // Success states (Resolved Actions/Environment)
          600: '#2dd4bf',
          700: '#5eead4',
          800: '#99f6e4',
          900: '#ccfbf1',
        },
        redAccent: {
          100: '#7f1d1d',
          200: '#991b1b',
          300: '#b91c1c',
          400: '#dc2626',
          500: '#ef4444', // Danger states (Incidents)
          600: '#f87171',
          700: '#fca5a5',
          800: '#fecaca',
          900: '#fee2e2',
        },
        blueAccent: {
          100: '#1e3a8a',
          200: '#1e40af',
          300: '#1d4ed8',
          400: '#2563eb',
          500: '#3b82f6', // Info states (Documents/Training)
          600: '#60a5fa',
          700: '#93c5fd',
          800: '#bfdbfe',
          900: '#dbeafe',
        },
        warningAccent: {
          100: '#78350f',
          200: '#92400e',
          300: '#b45309',
          400: '#d97706',
          500: '#f59e0b', // Warning states (Hazards/Audits)
          600: '#fbbf24',
          700: '#fcd34d',
          800: '#fde68a',
          900: '#fef3c7',
        },
      }
    : {
        grey: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        primary: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        greenAccent: {
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        redAccent: {
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        blueAccent: {
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        warningAccent: {
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      }),
});

// Material UI theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            // Semantic colors wired up for QHSE dashboards
            error: { main: colors.redAccent[500] },
            warning: { main: colors.warningAccent[500] },
            info: { main: colors.blueAccent[500] },
            success: { main: colors.greenAccent[500] },
            background: {
              default: colors.primary[100], // Deep slate background
              paper: colors.primary[200],   // Slightly lighter for cards/surfaces
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            error: { main: colors.redAccent[500] },
            warning: { main: colors.warningAccent[500] },
            info: { main: colors.blueAccent[500] },
            success: { main: colors.greenAccent[500] },
            background: {
              default: '#fcfcfc',
              paper: '#ffffff',
            },
          }),
    },
    // Fixed: Must be lowercase "typography" for MUI to apply it
    typography: {
      fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Source Sans 3', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};

// React context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};