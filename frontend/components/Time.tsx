import React, { useEffect, useState } from "react";

const Time = ({ timeData }: any) => {
  // const [timeData, setTimeData] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [city, setCity] = useState<any>();
  const [timezone, setTimezone] = useState<any>();

  // console.log("test", testData);
  useEffect(() => {
    const countryData = timeData.data.location.country.alpha2;
    const cityData = timeData.data.location.city.name;
    const timezoneData = timeData.data.timezone.code;

    setCountry(countryData);
    setCity(cityData);
    setTimezone(timezoneData);
  }, [timeData]);

  return (
    <div>
      <div>
        <span>23:14</span>
        <span>{timezone}</span>
      </div>
      <div>
        <p>
          In {city}, {country}
        </p>
      </div>
    </div>
  );
};

export default Time;
