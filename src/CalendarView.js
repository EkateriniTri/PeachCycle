import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarView() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === "month") {
            const day = date.getDate();
            if (day >= 1 && day <= 5) return "menstrual";
            if (day >= 6 && day <= 12) return "follicular";
            if (day >= 13 && day <= 16) return "ovulation";
            if (day >= 17 && day <= 28) return "luteal";
          }
        }}
      />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
}
