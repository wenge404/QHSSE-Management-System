import {createContext, useState, useMemo} from 'react';
import {createTheme} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

//colour design tokens
export const tokens = (mode) => ({
   ...(mode === 'dark' 
   ?{
      grey: {
        100: 'oklch(96.1% 0 0)',
        200: 'oklch(90.4% 0 0)',
        300: 'oklch(84.3% 0 0)',
        400: 'oklch(67.1% 0 0)',
        500: 'oklch(51% 0 0)',
        600: 'oklch(40.2% 0 0)',
        700: 'oklch(34.4% 0 0)',
        800: 'oklch(25.1% 0 0)',
        900: 'oklch(19.6% 0 0)',
      },
      primary: {
          100: 'oklch(96.9% 0.003 267.115)',
          200: 'oklch(93.1% 0.006 267.104)',
          300: 'oklch(87.7% 0.011 260.911)',
          400: 'oklch(71.4% 0.024 263.898)',
          500: 'oklch(55.9% 0.029 266.937)',
          600: 'oklch(45.6% 0.032 259.375)',
          700: 'oklch(38.5% 0.037 262.306)',
          800: 'oklch(29.1% 0.036 259.421)',
          900: 'oklch(22.5% 0.037 267.238)',
        },
      greenAccent: {
          100: 'oklch(95.1% 0.042 171.288)',
          300: 'oklch(85% 0.113 171.558)',
          200: 'oklch(90.7% 0.078 170.913)',
          400: 'oklch(77.1% 0.124 172.399)',
          500: 'oklch(69.9% 0.114 172.99)',
          600: 'oklch(59.6% 0.096 175.191)',
          700: 'oklch(50.8% 0.078 176.878)',
          800: 'oklch(43.5% 0.064 178.703)',
          900: 'oklch(38.5% 0.052 178.903)',
        },
      redAccent: {
          100: 'oklch(93.2% 0.024 18.109)',
          200: 'oklch(87.7% 0.046 18.726)',
          300: 'oklch(79.6% 0.085 19.963)',
          400: 'oklch(68.8% 0.142 22.608)',
          500: 'oklch(61.7% 0.176 25.723)',
          600: 'oklch(56.1% 0.182 27.717)',
          700: 'oklch(49.3% 0.159 27.91)',
          800: 'oklch(43.6% 0.132 27.291)',
          900: 'oklch(39.2% 0.105 26.115)',
        },
      blueAccent: {
          100: 'oklch(95.1% 0.045 246.187)',
          200: 'oklch(90.7% 0.086 246.187)',
          300: 'oklch(85.1% 0.136 246.187)',
          400: 'oklch(77.1% 0.199 246.187)',
          500: 'oklch(69.9% 0.249 246.187)',
          600: 'oklch(59.6% 0.299 246.187)',
          700: 'oklch(50.8% 0.349 246.187)',
          800: 'oklch(43.5% 0.399 246.187)',
          900: 'oklch(38.5% 0.449 246.187)',
        },
    } : 
     {
        grey: {
          100: 'oklch(19.6% 0 0)',
          200: 'oklch(25.1% 0 0)',
          300: 'oklch(34.4% 0 0)',
          400: 'oklch(40.2% 0 0)',
          500: 'oklch(51% 0 0)',
          600: 'oklch(67.1% 0 0)',
          700: 'oklch(84.3% 0 0)',
          800: 'oklch(90.4% 0 0)',
          900: 'oklch(96.1% 0 0)',
        },
        primary: {
            100: 'oklch(22.5% 0.037 267.238)',
            200: 'oklch(29.1% 0.036 259.421)',
            300: 'oklch(38.5% 0.037 262.306)',
            400: 'oklch(45.6% 0.032 259.375)',
            500: 'oklch(55.9% 0.029 266.937)',
            600: 'oklch(71.4% 0.024 263.898)',
            700: 'oklch(87.7% 0.011 260.911)',
            800: 'oklch(93.1% 0.006 267.104)',
            900: 'oklch(96.9% 0.003 267.115)',
          },
          greenAccent: {
              100: 'oklch(38.5% 0.052 178.903)',
              200: 'oklch(43.5% 0.064 178.703)',
              300: 'oklch(50.8% 0.078 176.878)',
              400: 'oklch(59.6% 0.096 175.191)',
              500: 'oklch(69.9% 0.114 172.99)',
              600: 'oklch(77.1% 0.124 172.399)',
              700: 'oklch(85% 0.113 171.558)',
              800: 'oklch(90.7% 0.078 170.913)',
              900: 'oklch(95.1% 0.042 171.288)',
            },
          redAccent: {
              100: 'oklch(39.2% 0.105 26.115)',
              200: 'oklch(43.6% 0.132 27.291)',
              300: 'oklch(49.3% 0.159 27.91)',
              400: 'oklch(56.1% 0.182 27.717)',
              500: 'oklch(61.7% 0.176 25.723)',
              600: 'oklch(68.8% 0.142 22.608)',
              700: 'oklch(79.6% 0.085 19.963)',
              800: 'oklch(87.7% 0.046 18.726)',
              900: 'oklch(93.2% 0.024 18.109)',
            },
          blueAccent: {
              100: 'oklch(38.5% 0.449 246.187)',
              200: 'oklch(43.5% 0.399 246.187)',
              300: 'oklch(50.8% 0.349 246.187)',
              400: 'oklch(59.6% 0.299 246.187)',
              500: 'oklch(69.9% 0.249 246.187)',
              600: 'oklch(77.1% 0.199 246.187)',
              700: 'oklch(85.1% 0.136 246.187)',
              800: 'oklch(90.7% 0.086 246.187)',
              900: 'oklch(95.1% 0.045 246.187)',
            },
        })
   })
//material ui theme settings
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
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
          }),
    }, typography: {
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
    }
  };
};

// react context for color mode
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