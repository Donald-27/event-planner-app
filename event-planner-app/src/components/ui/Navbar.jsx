import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo-link">
          <span className="logo-icon">📅</span>
          <span className="logo-text">EventPlanner</span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/create-event" className="nav-link">Create Event</Link>
      </div>

      <div className="navbar-controls">
        {        /* Theme toggle button */}
        <ThemeToggle />
        
        {user ? (
          <div className="user-section">
            <span className="username">{user.name || user.email}</span>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-button">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;