import React, { useState, useEffect } from "react";
import { useAppState, useActions } from "../overmind";

const Expand = () => {
  const { isLoading, timeData } = useAppState();

  return (
    <div className="-mx-8 px-8 py-12 md:py-24 lg:py-20 grid grid-cols-2 md:gap-8">
      {!isLoading &&
        timeData.map((data: any, idx: number) => {
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
};

export default Expand;
