import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '' : ''}
    </button>
  );
};

export default ThemeToggle;