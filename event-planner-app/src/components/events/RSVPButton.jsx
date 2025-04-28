import { useState } from 'react';
import { useEvents } from '../../context/EventContext.jsx';
import { useUser } from '../../context/UserContext.jsx';

export default function RSVPButton({ eventId }) {
  const [isGoing, setIsGoing] = useState(false);
  const { rsvpToEvent } = useEvents();
  const { user } = useUser();

  const handleRSVP = () => {
    if (!user) return;
    rsvpToEvent(eventId, user.name);
    setIsGoing(!isGoing);
  };

  return (
    <button 
      className={`rsvp-button ${isGoing ? 'going' : ''}`}
      onClick={handleRSVP}
    >
      {isGoing ? ' Going!' : '✋ RSVP'}
    </button>
  );
}