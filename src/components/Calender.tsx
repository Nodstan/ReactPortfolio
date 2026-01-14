import React from 'react';
import {GitHubCalendar} from "react-github-calendar";

const Calendar = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none bg-grid-dark opacity-10"></div>
      <h1 className="text-[30px] font-bold text-portfolio-primary text-center">
        My GitHub Activity
      </h1>

      <div className="p-4 rounded-xl shadow-md w-full max-w-[900px] overflow-hidden bg-card text-card-foreground">
        <GitHubCalendar
          username="NodStan"
          colorScheme="dark"
        />
      </div>
    </div>
  );
};

export default Calendar;
