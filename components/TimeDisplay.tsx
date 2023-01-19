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
    <div className={isExpand ? "h-screen" : ""}>
      <Time currentTime={currentTime} formatTime={formatTime} />
      <Expand />
    </div>
  );
};

export default TimeDisplay;
