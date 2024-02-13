import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

interface ThemeProviderState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
    theme: 'system', // Default theme
    setTheme: () => null, // Placeholder function
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const ThemeProvider = ({ children, storageKey = 'vite-ui-theme' }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(localStorage.getItem(storageKey!!) as Theme)

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove('light', 'dark');
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }

        if (typeof storageKey === 'string') {
            localStorage.setItem(storageKey, theme);
        }
    }, [theme, storageKey]);

    const value = {
        theme,
        setTheme,
    };

    return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
