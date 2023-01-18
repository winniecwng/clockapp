import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppState, useActions } from "../overmind";

const Time = () => {
  const { isExpand, currentTime, formatTime } = useAppState();
  const { handleExpandData } = useActions();

  const [country, setCountry] = useState<any>();
  const [city, setCity] = useState<any>();
  const [timezone, setTimezone] = useState<any>();
  const [greeting, setGreeting] = useState<string>();
  const [greetingIcon, setGreetingIcon] = useState<any>();

  useEffect(() => {
    if (currentTime) {
      const countryData = currentTime.data.location.country.alpha2;
      const cityData = currentTime.data.location.city.name;
      const timezoneData = currentTime.data.timezone.code;

      setCountry(countryData);
      setCity(cityData);
      setTimezone(timezoneData);
    }
  }, [currentTime]);

  useEffect(() => {
    if (formatTime) {
      const hour = parseInt(formatTime.slice(0, 2));
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
  }, [formatTime]);

  const pill = (
    <div className="lg:self-end">
      <div className="border border-black bg-white h-11 w-28 md:h-16 md:w-36 rounded-full">
        <div className="flex justify-evenly my-3 md:my-5">
          <p className="text-sm md:text-base text-black">
            {isExpand ? "L e s s" : "M o r e"}
          </p>
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
    <div
      className={`uppercase ${
        isExpand && "pt-20 md:pt-40 lg:pt-20"
      } lg:flex lg:justify-between`}
    >
      <div className="pb-2 lg:text-xl">
        <div className="tracking-widest flex gap-3">
          <div>{greetingIcon}</div>
          <p className="self-center">
            {greeting}{" "}
            <span className="hidden md:inline">, it's currently </span>
          </p>
        </div>
        <div className="my-6">
          <span className="text-8xl md:text-9xl font-bold lg:tracking-wider">
            {formatTime}
          </span>
          <span className="ml-4 lg:ml-16 lg:text-3xl">{timezone}</span>
        </div>
        <div className="tracking-widest font-bold">
          <p>
            In {city}, {country}
          </p>
        </div>
      </div>
      <div
        className="py-12 md:py-20 md:py-0 lg:flex hover:cursor-pointer"
        onClick={handleExpandData}
      >
        {pill}
      </div>
    </div>
  );
};

export default Time;
