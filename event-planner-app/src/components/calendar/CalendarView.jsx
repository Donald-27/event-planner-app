import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarView({ onDateSelect }) {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar
        onChange={(date) => {
          setDate(date);
          onDateSelect?.(date);
        }}
        value={date}
      />
    </div>
  );
}