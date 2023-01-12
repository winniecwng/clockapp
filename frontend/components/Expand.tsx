import React from "react";

interface Props {
  dayOfWeek: number | undefined;
  dayOfYear: number | undefined;
  weekNumber: number | undefined;
  timezone: string | undefined;
}

function Expand({ dayOfWeek, dayOfYear, weekNumber, timezone }: Props) {
  const expandData = [
    { title: "Current Timezone", info: timezone },
    { title: "Day of the Year", info: dayOfYear },
    { title: "Day of the Week", info: dayOfWeek },
    { title: "Week Number", info: weekNumber },
  ];

  return (
    <div className="-mx-8 px-8 py-12 md:py-24 lg:py-20 grid grid-cols-2 md:gap-8">
      {expandData.map((data, idx) => {
        const { title, info } = data;
        return (
          <p
            key={idx}
            className="flex justify-between mb-4 md:flex-col md:gap-3"
          >
            <span className="text-sm self-center md:self-start uppercase tracking-widest">
              {title}
            </span>
            <span className="text-large md:text-3xl lg:text-4xl font-bold">
              {info}
            </span>
          </p>
        );
      })}
    </div>
  );
}

export default Expand;
