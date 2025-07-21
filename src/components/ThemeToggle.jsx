import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('system');
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    // Get stored theme preference or default to system
    const storedTheme = localStorage.getItem('theme') || 'system';
    setTheme(storedTheme);
    
    // Function to get the actual theme based on system preference
    const getSystemTheme = () => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Function to apply theme
    const applyTheme = (themeToApply) => {
      if (themeToApply === 'system') {
        const systemTheme = getSystemTheme();
        setCurrentTheme(systemTheme);
        if (systemTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }
      } else {
        setCurrentTheme(themeToApply);
        if (themeToApply === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      }
    };

    // Apply initial theme
    applyTheme(storedTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  const cycleTheme = () => {
    let newTheme;
    if (theme === 'light') {
      newTheme = 'dark';
    } else if (theme === 'dark') {
      newTheme = 'system';
    } else {
      newTheme = 'light';
    }
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply the new theme
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setCurrentTheme(systemTheme);
      if (systemTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    } else {
      setCurrentTheme(newTheme);
      if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  };

  const getThemeIcon = () => {
    if (theme === 'light') {
      return '☀️';
    } else if (theme === 'dark') {
      return '🌙';
    } else {
      return currentTheme === 'dark' ? '🌙' : '☀️';
    }
  };

  const getThemeLabel = () => {
    if (theme === 'light') {
      return 'Light mode';
    } else if (theme === 'dark') {
      return 'Dark mode';
    } else {
      return `Auto (${currentTheme})`;
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={cycleTheme}
      title={getThemeLabel()}
      aria-label={`Switch theme. Current: ${getThemeLabel()}`}
    >
      <span role="img" aria-hidden="true">
        {getThemeIcon()}
      </span>
    </button>
  );
};

export default ThemeToggle;
