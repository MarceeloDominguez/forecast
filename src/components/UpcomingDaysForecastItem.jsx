import React from "react";

export default function UpcomingDaysForecastItem({ item }) {
  return (
    <div className="p-3 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col items-center justify-center">
        <p className="font-rubik font-bold">{item.weekday}</p>
        <img src={item.weatherIcon} alt="icon" />
        <div>
          <span className="font-rubik font-bold">{item.temperature_max}°</span>{" "}
          <span>{item.temperature_min}°</span>
        </div>
      </div>
    </div>
  );
}
