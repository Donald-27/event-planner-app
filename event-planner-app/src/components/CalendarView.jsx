import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

function CalendarView() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
}

export default CalendarView;
