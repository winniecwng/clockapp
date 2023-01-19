import React, { useEffect, useState } from "react";
import Quote from "../components/Quote";
import TimeDisplay from "../components/TimeDisplay";
import { useAppState } from "../overmind";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Home = ({ currentTime }: any) => {
  const { isExpand } = useAppState();
  const [closeQuote, setCloseQuote] = useState<boolean>(isExpand);
  const [backgroundTime, setBackgroundTime] = useState<any>();
  const [formatTime, setFormatTime] = useState<any>();

  useEffect(() => {
    setCloseQuote(!closeQuote);
  }, [isExpand]);

  useEffect(() => {
    if (currentTime) {
      const formattedTime = currentTime.data.timezone.current_time.slice(
        11,
        16
      );

      setFormatTime(formattedTime);
    }
  }, [currentTime]);

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
        <div
          className={`px-8 md:px-16 lg:px-48 h-1/2 pt-8 ${
            closeQuote
              ? "transition translate-y-0 duration-700"
              : "transition -translate-y-full duration-700"
          }`}
        >
          <Quote />
        </div>
        <div className={`${!isExpand && "h-1/2"}`}>
          <TimeDisplay currentTime={currentTime} formatTime={formatTime} />
        </div>
      </div>
    </div>
  );
};

export default Home;
