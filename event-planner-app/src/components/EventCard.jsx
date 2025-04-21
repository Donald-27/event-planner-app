import React from 'react';

function EventCard({ title, date, time }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{date} at {time}</p>
    </div>
  );
}

export default EventCard;