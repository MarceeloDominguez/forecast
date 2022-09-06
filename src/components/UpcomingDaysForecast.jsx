import React from "react";
import { useContextWeather } from "../context/Context";
import UpcomingDaysForecastItem from "./UpcomingDaysForecastItem";

export default function UpcomingDaysForecast() {
  const {
    data: { upcomingDays },
  } = useContextWeather();

  if (!upcomingDays) return;

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 grid-cols-3 gap-2 sm:grid-col-2 p-2">
      {upcomingDays.map((item, index) => (
        <UpcomingDaysForecastItem item={item} key={index} />
      ))}
    </div>
  );
}
