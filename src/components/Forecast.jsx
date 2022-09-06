import React from "react";
import { useContextWeather } from "../context/Context";
import CurrentDay from "./CurrentDay";
import CurrentDayDescription from "./CurrentDayDescription";
import UpcomingDaysForecast from "./UpcomingDaysForecast";
import Loading from "./Loading";
import Error from "./Error";

export default function Forecast() {
  const { loading, error } = useContextWeather();

  return (
    <>
      {error && <Error />}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex lg:h-2/4 w-full">
            <div className="h-full w-full py-5 lg:px-6 px-2 grid lg:grid-cols-2">
              <CurrentDay />
              <CurrentDayDescription />
            </div>
          </div>
          <div className="lg:h-2/4 lg:pt-16">
            <UpcomingDaysForecast />
          </div>
        </>
      )}
    </>
  );
}
