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

  // console.log("isExpand from TimeDisplay", isExpand);

  return (
    <div className={isExpand ? "h-screen" : ""}>
      {/* // this style is for when expand is open */}
      <div className="h-3/5 lg:h-1/2">
        <Time />
      </div>
      {isExpand && (
        <div className="h-2/5 lg:h-1/2">
          <Expand />
        </div>
      )}
    </div>
  );
};

export default TimeDisplay;
