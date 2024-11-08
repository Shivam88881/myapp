import React from 'react';
import "./calendar.scss";

const Calendar = () => {
  const data = [
    { date: "2021-02-01", count: 16 },
    { date: "2021-02-20", count: 16 },
    { date: "2021-02-21", count: 16 },
    { date: "2021-02-22", count: 16 },
    { date: "2021-02-23", count: 16 },
    { date: "2021-02-24", count: 30 },
  ];
  const year = 2021;

  // Helper function to determine if date exists in data and get count
  const getCountForDate = (date) => {
    const entry = data.find(d => d.date === date);
    return entry ? entry.count : null;
  };

  // Helper function to generate opacity based on count
  const getOpacity = (count) => {
    if (!count) return '0';
    // Assuming maximum count value for full opacity is 100
    return (0.2 + Math.min(count / 50, 0.5)).toString();
  };

  // Helper function to get the number of days in a month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Generate calendar for all months
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="calendar">
      {months.map((month, monthIndex) => (
        <div key={month} className="month">
          <p>{month}</p>
          <div className="grid">
            {[...Array(getDaysInMonth(monthIndex, year))].map((_, index) => {
              const day = index + 1;
              const dateString = `${year}-${(monthIndex + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
              const count = getCountForDate(dateString);
              const boxStyle = {
                backgroundColor: count != null ? `rgba(0,128,0,${getOpacity(count)})` : '#9c9c9c',
              };

              return (
                <div key={day} className="day" style={boxStyle}></div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
