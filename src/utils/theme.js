// Theme utility functions
export const THEME_STORAGE_KEY = 'portfolio-theme';

export const getStoredTheme = () => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    console.warn('localStorage not available:', error);
    return null;
  }
};

export const setStoredTheme = (theme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('localStorage not available:', error);
  }
};

export const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const applyTheme = (theme) => {
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    root.classList.add('dark-theme');
  } else {
    root.removeAttribute('data-theme');
    root.classList.remove('dark-theme');
  }
  
  // Also set a CSS custom property for easier styling
  root.style.setProperty('--current-theme', theme);
};

export const initializeTheme = () => {
  const stored = getStoredTheme();
  const system = getSystemTheme();
  
  // Use stored theme if available, otherwise use system preference
  const initialTheme = stored || system;
  
  applyTheme(initialTheme);
  
  // Store the initial theme if not already stored
  if (!stored) {
    setStoredTheme(initialTheme);
  }
  
  return initialTheme;
};
