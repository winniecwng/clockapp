import React, { useEffect, useState } from "react";
import Image from "next/image";

const Time = ({ timeData }: any) => {
  const [currentTime, setCurrentTime] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [city, setCity] = useState<any>();
  const [timezone, setTimezone] = useState<any>();
  const [greeting, setGreeting] = useState<string>();
  const [greetingIcon, setGreetingIcon] = useState<any>();

  useEffect(() => {
    const countryData = timeData.data.location.country.alpha2;
    const cityData = timeData.data.location.city.name;
    const timezoneData = timeData.data.timezone.code;
    const formattedTime = timeData.data.timezone.current_time.slice(11, 16);

    setCountry(countryData);
    setCity(cityData);
    setTimezone(timezoneData);
    setCurrentTime(formattedTime);
  }, [timeData]);

  useEffect(() => {
    if (currentTime) {
      const hour = parseInt(currentTime.slice(0, 2));
      let currentGreeting;
      if (5 < hour && hour < 12) {
        currentGreeting = "Good Morning";
      } else if (12 <= hour && hour < 18) {
        currentGreeting = "Good Afternoon";
      } else {
        currentGreeting = "Good Evening";
      }

      const timeIcon =
        5 <= hour && hour <= 18 ? (
          <Image
            src="/assets/desktop/icon-sun.svg"
            alt="sun"
            width="28"
            height="28"
          />
        ) : (
          <Image
            src="/assets/desktop/icon-moon.svg"
            alt="sun"
            width="28"
            height="28"
          />
        );

      setGreetingIcon(timeIcon);

      setGreeting(currentGreeting);
    }
  }, [currentTime]);

  const pill = (
    <div className="lg:self-end">
      <div className="border border-black h-11 w-28 md:h-16 md:w-36 rounded-full">
        <div className="flex justify-evenly my-3 md:my-5">
          <p className="text-sm md:text-base">M o r e</p>
          <div className="flex -mt-1.5 md:-mt-2.5">
            <div className="self-center md:hidden">
              <Image
                src="/assets/desktop/icon-arrow-up.svg"
                alt="up"
                width="32"
                height="32"
              />
            </div>
            <div className="self-center hidden md:inline">
              <Image
                src="/assets/desktop/icon-arrow-up.svg"
                alt="up"
                width="40"
                height="40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="uppercase pt-20 md:pt-40 lg:pt-20 lg:flex lg:justify-between">
      {/* need pt-20 md:pt-40 lg:pt-12 when the expand is pulled out */}
      <div className="pb-2 lg:text-xl">
        <div className="tracking-widest flex gap-3">
          <div>{greetingIcon}</div>
          <p className="self-center">
            {greeting}{" "}
            <span className="hidden md:inline">, it's currently </span>
          </p>
        </div>
        <div className="my-6">
          <span className="text-8xl md:text-9xl font-bold">{currentTime}</span>
          <span className="ml-4 lg:ml-16 lg:text-3xl">{timezone}</span>
        </div>
        <div className="tracking-widest font-bold">
          <p>
            In {city}, {country}
          </p>
        </div>
      </div>
      <div className="py-12 md:py-20 md:py-0 lg:flex">{pill}</div>
    </div>
  );
};

export default Time;
