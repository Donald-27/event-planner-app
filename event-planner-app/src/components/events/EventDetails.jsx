import { useParams } from 'react-router-dom';
import { useEvents } from '../../context/EventContext';

export default function EventDetails() {
  const { id } = useParams();
  const { events } = useEvents();
  const event = events.find(e => e.id === Number(id));

  if (!event) return <div>Event not found</div>;

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
    </div>
  );
}