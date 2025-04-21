// shared/theme/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './theme.ts';

type ThemeContextType = {
  mode: 'light' | 'dark';
  toggle: () => void;
  theme: typeof lightTheme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggle: () => {},
  theme: lightTheme,
});

export const useThemeMode = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: light)').matches;
    setMode(prefersDark ? 'dark' : 'light');
  }, []);

  const toggle = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggle, theme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
