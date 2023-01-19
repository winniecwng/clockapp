import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useAppState, useActions } from "../overmind";
import App from "../components/Home";

export default function Home({ timeData }: any) {
  const { getWorldTime, setCurrentTime } = useActions();
  const { currentTime } = useAppState();
  const [currentTimeData, setCurrentTimeData] = useState<any>();

  useEffect(() => {
    getWorldTime();
    if (timeData) {
      setCurrentTime(timeData);
    }
  });

  useEffect(() => {
    if (currentTime) {
      setCurrentTimeData(currentTime);
    }
  }, [currentTime]);

  return (
    <>
      <Head>
        <title>Clock App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <App />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // const api_key = process.env.REACT_APP_API_KEY;
  // const res = await fetch(
  //   `https://api.ipbase.com/v2/info?apikey=${api_key}&ip=1.1.1.1`
  // );
  // const data = await res.json();

  const timeData = {
    data: {
      ip: "100.2.253.114",
      hostname: "pool-100-2-253-114.nycmny.fios.verizon.net",
      type: "v4",
      range_type: {
        type: "PUBLIC",
        description: "Public address",
      },
      connection: {
        asn: 19262,
        organization: "Verizon Business",
        isp: "Verizon Business",
        range: "100.2.240.0/20",
      },
      location: {
        geonames_id: 6947104,
        latitude: 40.71455001831055,
        longitude: -74.00714111328125,
        zip: "10007",
        continent: {
          code: "NA",
          name: "North America",
          name_translated: "North America",
        },
        country: {
          alpha2: "US",
          alpha3: "USA",
          calling_codes: ["+1"],
          currencies: [
            {
              symbol: "$",
              name: "US Dollar",
              symbol_native: "$",
              decimal_digits: 2,
              rounding: 0,
              code: "USD",
              name_plural: "US dollars",
            },
          ],
          emoji: "🇺🇸",
          ioc: "USA",
          languages: [
            {
              name: "English",
              name_native: "English",
            },
          ],
          name: "United States",
          name_translated: "United States",
          timezones: [
            "America/New_York",
            "America/Detroit",
            "America/Kentucky/Louisville",
            "America/Kentucky/Monticello",
            "America/Indiana/Indianapolis",
            "America/Indiana/Vincennes",
            "America/Indiana/Winamac",
            "America/Indiana/Marengo",
            "America/Indiana/Petersburg",
            "America/Indiana/Vevay",
            "America/Chicago",
            "America/Indiana/Tell_City",
            "America/Indiana/Knox",
            "America/Menominee",
            "America/North_Dakota/Center",
            "America/North_Dakota/New_Salem",
            "America/North_Dakota/Beulah",
            "America/Denver",
            "America/Boise",
            "America/Phoenix",
            "America/Los_Angeles",
            "America/Anchorage",
            "America/Juneau",
            "America/Sitka",
            "America/Metlakatla",
            "America/Yakutat",
            "America/Nome",
            "America/Adak",
            "Pacific/Honolulu",
          ],
          is_in_european_union: false,
          fips: "US",
          geonames_id: "6252001",
          hasc_id: "US",
          wikidata_id: "Q30",
        },
        city: {
          fips: "3651000",
          alpha2: null,
          geonames_id: "5128581",
          hasc_id: null,
          wikidata_id: "Q60",
          name: "New York",
          name_translated: "New York",
        },
        region: {
          fips: "US36",
          alpha2: "US-NY",
          geonames_id: "5128638",
          hasc_id: "US.NY",
          wikidata_id: "Q1384",
          name: "New York",
          name_translated: "New York",
        },
      },
      tlds: [".us"],
      timezone: {
        id: "America/New_York",
        current_time: "2023-01-11T02:34:19-05:00",
        code: "EST",
        is_daylight_saving: false,
        gmt_offset: -18000,
      },
      security: {
        is_anonymous: null,
        is_bot: null,
        is_known_attacker: null,
        is_proxy: null,
        is_spam: null,
        is_tor: null,
        proxy_type: null,
        threat_score: null,
      },
      domains: {
        count: null,
        domains: [],
      },
    },
  };

  return {
    props: { timeData },
  };
}
