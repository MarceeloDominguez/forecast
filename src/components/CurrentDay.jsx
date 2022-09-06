import React from "react";
import { useContextWeather } from "../context/Context";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

export default function CurrentDay() {
  const {
    data: { currentDay },
  } = useContextWeather();

  if (!currentDay) return;

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h1 className="font-rubik font-bold lg:text-4xl text-2xl tracking-wide capitalize text-slate-900 mb-2">
          {currentDay.weekday}
        </h1>
        <div className="flex items-center text-slate-600 mb-1">
          <AiOutlineCalendar />
          <span className="ml-1 font-rubik tracking-wide">
            {currentDay.date}
          </span>
        </div>
        <div className="flex items-center text-slate-600">
          <GoLocation />
          <span className="ml-1 font-rubik capitalize">
            {" "}
            {currentDay.location}
          </span>
        </div>
      </div>
      <div>
        <img src={currentDay.weatherIcon} alt="icon" />
      </div>
      <div>
        <h2 className="font-rubik font-bold lg:text-5xl text-3xl text-slate-900 my-2">
          {Math.round(currentDay.temperature)} °C
        </h2>
        <p className="font-rubik font-bold tracking-wide text-slate-900">
          {currentDay.weatherDescription}
        </p>
      </div>
    </div>
  );
}
