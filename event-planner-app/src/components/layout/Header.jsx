import { useTheme } from '../../context/ThemeContext.jsx';
import { useUser } from '../../context/UserContext.jsx';

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <h1>Event Planner</h1>
      <div className="header-controls">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? ' Light' : 'Dark'}
        </button>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </header>
  );
}