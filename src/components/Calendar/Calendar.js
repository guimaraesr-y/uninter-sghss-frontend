import React from "react";
import "./Calendar.css";

const Calendar = () => {
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const calendarDays = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [
      29,
      30,
      { day: 1, nextMonth: true },
      { day: 2, nextMonth: true },
      { day: 3, nextMonth: true },
      { day: 4, nextMonth: true },
      { day: 5, nextMonth: true },
    ],
  ];

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <h3 className="calendar-title">Junho 2025</h3>
        <div className="calendar-nav">
          <button className="nav-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.41 16.58L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.58Z"
                fill="#838383"
              />
            </svg>
          </button>
          <button className="nav-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.58997 16.58L13.17 12L8.58997 7.41L9.99997 6L16 12L9.99997 18L8.58997 16.58Z"
                fill="#838383"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="weekday-header">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="weekday">
              {day}
            </div>
          ))}
        </div>

        {calendarDays.map((week, weekIndex) => (
          <div key={weekIndex} className="calendar-week">
            {week.map((dayData, dayIndex) => {
              const isNextMonth =
                typeof dayData === "object" && dayData.nextMonth;
              const dayNumber =
                typeof dayData === "object" ? dayData.day : dayData;

              return (
                <div
                  key={dayIndex}
                  className={`calendar-day ${isNextMonth ? "next-month" : ""}`}
                >
                  {dayNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
