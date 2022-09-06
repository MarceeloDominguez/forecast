import React from "react";
import { useContextWeather } from "../context/Context";
import CurrentDayDescriptionItem from "./CurrentDayDescriptionItem";

export default function CurrentDayDescription() {
  const {
    data: { currentDayDetails },
  } = useContextWeather();

  if (!currentDayDetails) return;

  return (
    <div className="pt-4 lg:pt-0">
      {currentDayDetails.map((item, index) => (
        <CurrentDayDescriptionItem item={item} key={index} />
      ))}
    </div>
  );
}
