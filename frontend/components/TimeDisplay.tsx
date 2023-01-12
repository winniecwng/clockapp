import React, { useState, useEffect } from "react";
import Expand from "./Expand";
import Time from "./Time";

const TimeDisplay = ({ timeData }: any) => {
  const [dayOfWeek, setDayOfWeek] = useState<number>();
  const [dayOfYear, setDayOfYear] = useState<number>();
  const [timezone, setTimezone] = useState<string>();
  const [weekNumber, setWeekNumber] = useState<number>();

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((data) => {
        const { day_of_week, day_of_year, timezone, week_number } = data;
        setDayOfWeek(day_of_week);
        setDayOfYear(day_of_year);
        setTimezone(timezone);
        setWeekNumber(week_number);
      });
  }, [dayOfWeek, dayOfYear, timezone, weekNumber]);

  return (
    <div>
      {/* // this style is for when expand is open */}
      {/* <div className="h-screen"> */}
      <div className="h-3/5 lg:h-1/2">
        <Time timeData={timeData} />
      </div>
      {/* <div className="h-2/5 lg:h-1/2">
        <Expand
          dayOfWeek={dayOfWeek}
          dayOfYear={dayOfYear}
          timezone={timezone}
          weekNumber={weekNumber}
        />
      </div> */}
    </div>
  );
};

export default TimeDisplay;
