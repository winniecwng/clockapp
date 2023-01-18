import React, { useEffect, useState } from "react";
import Quote from "../components/Quote";
import TimeDisplay from "../components/TimeDisplay";
import { useAppState } from "../overmind";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const { isExpand, formatTime } = useAppState();
  const [closeQuote, setCloseQuote] = useState<boolean>(isExpand);
  const [backgroundTime, setBackgroundTime] = useState<any>();

  useEffect(() => {
    setCloseQuote(!closeQuote);
  }, [isExpand]);

  useEffect(() => {
    let time;
    if (formatTime) {
      const hour = parseInt(formatTime.slice(0, 2));
      if (5 < hour && hour < 18) {
        time = "daytime";
      } else {
        time = "nighttime";
      }
    }

    const background = {
      desktop: `/assets/desktop/bg-image-${time}.jpg/`,
      mobile: `/assets/mobile/bg-image-${time}.jpg/`,
      tablet: `/assets/tablet/bg-image-${time}.jpg/`,
    };

    setBackgroundTime(background);
  }, [formatTime]);

  return (
    <div
      className="bg-cover text-white"
      style={{ backgroundImage: `url(${backgroundTime?.desktop})` }}
    >
      <div className={`${inter.className} ${!isExpand ? "h-screen" : " "}`}>
        {/* the paddings will affect how the expand will look when we add background */}
        {/* come back to adjust accordingl */}
        {closeQuote && (
          <div className="px-8 md:px-16 lg:px-48 h-1/2 pt-8">
            <Quote />
          </div>
        )}
        <div className={`${!isExpand && "h-1/2"}`}>
          <TimeDisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
