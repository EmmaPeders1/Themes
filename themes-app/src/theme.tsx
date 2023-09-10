import { createContext, useContext, ReactNode } from 'react';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    primaryButtons: string;
    secondaryButtons: string;
    primaryText: string;
  };
  fontfamily: {
    primary: string;
    secondary: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
}

{/* 
Palette 1989: 
#d2bc88	
#dcc9a8	
#d6e9ff	
#c6b8e2	
#b8bfe2
*/}
export const theme: Theme = {
  colors: {
    primary: 'blue',
    secondary: 'green',
    primaryButtons: '#d6e9ff',
    secondaryButtons: '#c6b8e2',
    primaryText: "#341005",
  },
  fontfamily: {
    primary: 'Arial, sans-serif',
    secondary: '"Lucida Console", "Courier New", monospace',
    // Add more custom fonts here
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    // Add more custom spacing here
  },
  // Add other theme properties as needed
};

export const ThemeContext = createContext<Theme | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  customTheme?: Theme; // You can optionally pass a custom theme
}

export function ThemeProvider({ children, customTheme }: ThemeProviderProps) {
  const themeToUse = customTheme || theme;

  return (
    <ThemeContext.Provider value={themeToUse}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
