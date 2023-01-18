import React, { useState, useEffect } from "react";
import Expand from "./Expand";
import Time from "./Time";
import { useAppState, useActions } from "../overmind";

const TimeDisplay = () => {
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
      <div className={`px-8 md:px-16 lg:px-48 ${isExpand && "h-3/5 lg:h-1/2"}`}>
        <Time />
      </div>
      <div className={`${isExpand ? "h-2/5 lg:h-1/2" : "hidden"}`}>
        <Expand />
      </div>
    </div>
  );
};

export default TimeDisplay;
