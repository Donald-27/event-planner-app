import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MiniCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mini-calendar">
      <Calendar
        onChange={setDate}
        value={date}
        calendarType="US"
        minDetail="month"
      />
    </div>
  );
}