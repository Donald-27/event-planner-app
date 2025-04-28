import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function EventCard({ event }) {
  const { darkMode } = useTheme();
  
  return (
    <div className={`event-card ${darkMode ? 'dark' : ''}`}>
      <Link to={`/event/${event.id}`} className="event-link">
        <h3>{event.title}</h3>
        <div className="event-meta">
          <span>📅 {event.date}</span>
          <span>🕒 {event.time}</span>
          <span>📍 {event.location}</span>
        </div>
        <div className="attendees">
          {event.attendees?.length > 0 && (
            <span>👥 {event.attendees.length} attending</span>
          )}
        </div>
      </Link>
    </div>
  );
}