import React from "react";
import Quote from "../components/Quote";
import TimeDisplay from "../components/TimeDisplay";
import { useAppState, useActions } from "../overmind";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const time = () => {
  const { isExpand, isLoading } = useAppState();
  return (
    <div>
      <div
        className={`px-8 md:px-16 lg:px-48 ${inter.className} ${
          !isExpand ? "h-screen" : ""
        }`}
      >
        {/* the paddings will affect how the expand will look when we add background */}
        {/* come back to adjust accordingl */}
        {!isExpand && (
          <div className="h-1/2 pt-8">
            <Quote />
          </div>
        )}
        <div className={`${!isExpand && "h-1/2"}`}>
          {/* <TimeDisplay timeData={timeData} /> */}
        </div>
      </div>
    </div>
  );
};

export default time;
