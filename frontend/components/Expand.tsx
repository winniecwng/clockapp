import React, { useState, useEffect } from "react";
import { useAppState, useActions } from "../overmind";

const Expand = () => {
  const { isLoading, timeData, formatTime } = useAppState();
  const [background, setBackground] = useState<string>();

  useEffect(() => {
    if (formatTime) {
      const hour = parseInt(formatTime.slice(0, 2));
      if (5 < hour && hour < 18) {
        setBackground("daytime");
      } else {
        setBackground("nighttime");
      }
    }
  }, [formatTime]);

  return (
    <div
      className={`h-full px-8 md:px-16 lg:px-48 py-12 md:py-24 lg:py-20 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 ${
        background === "nighttime" ? "bg-black" : "bg-[#979797]"
      }`}
    >
      {!isLoading &&
        timeData.map((data: any, idx: number) => {
          const { title, info } = data;
          return (
            <p
              key={idx}
              className="flex justify-between mb-4 md:mb-10 md:flex-col"
            >
              <span className="text-sm self-center md:self-start uppercase tracking-widest">
                {title}
              </span>
              <span className="text-large md:text-2xl lg:text-3xl font-bold">
                {info}
              </span>
            </p>
          );
        })}
    </div>
  );
};

export default Expand;
