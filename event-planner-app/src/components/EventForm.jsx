import React from 'react';
import EventTitle from './EventTitle';
import EventDate from './EventDate';
import EventTime from './EventTime';
import EventLocation from './EventLocation';
import EventDescription from './EventDescription';

function EventForm() {
  return (
    <form>
      <EventTitle />
      <EventDate />
      <EventTime />
      <EventLocation />
      <EventDescription />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
