import React from "react";

interface Props {
  dayOfWeek: number | undefined;
  dayOfYear: number | undefined;
  weekNumber: number | undefined;
  timezone: string | undefined;
}

function Expand({ dayOfWeek, dayOfYear, weekNumber, timezone }: Props) {
  return (
    <div>
      <p className="flex justify-between">
        <span>Current Timezone</span>
        <span>{timezone}</span>
      </p>
      <p className="flex justify-between">
        <span>Day of the Year</span>
        <span>{dayOfYear}</span>
      </p>
      <p className="flex justify-between">
        <span>Day of the Week</span>
        <span>{dayOfWeek}</span>
      </p>
      <p className="flex justify-between">
        <span>Week Number</span>
        <span>{weekNumber}</span>
      </p>
    </div>
  );
}

export default Expand;
