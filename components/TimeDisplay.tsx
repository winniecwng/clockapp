import React, { useState, useEffect } from "react";
import Expand from "./Expand";
import Time from "./Time";
import { useAppState, useActions } from "../overmind";

const TimeDisplay = ({ currentTime, formatTime }: any) => {
  const { isExpand } = useAppState();

  const [dayOfWeek, setDayOfWeek] = useState<number>();
  const [dayOfYear, setDayOfYear] = useState<number>();
  const [timezone, setTimezone] = useState<string>();
  const [weekNumber, setWeekNumber] = useState<number>();
  const [expanding, setExpanding] = useState<boolean>();
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
    // <div className={isExpand ? "h-screen" : ""}>
    <div>
      <div
        className={`px-8 md:px-16 lg:px-48 pt-20 md:pt-40 lg:pt-20 h-3/5 lg:h-1/2 ${
          isExpand
            ? "transition -translate-y-1/5 duration-700 ease-in-out"
            : "transition translate-y-0 duration-700 ease-in-out"
        } `}
      >
        <Time currentTime={currentTime} formatTime={formatTime} />
      </div>
      <div>
        <Expand />
      </div>
    </div>
  );
};

export default TimeDisplay;
