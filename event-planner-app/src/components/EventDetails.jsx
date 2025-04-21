import React from 'react';

function EventDetails({ event }) {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.date} at {event.time}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
    </div>
  );
}

export default EventDetails;
