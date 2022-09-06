import React from "react";
export default function CurrentDayDescriptionItem({ item }) {
  return (
    <div className="flex justify-between lg:py-3 py-1">
      <p className="font-rubik font-semibold lg:text-lg text-sm tracking-wide text-slate-900">
        {item.name}
      </p>
      <p className="font-rubik font-bold text-slate-900 lg:text-lg text-sm">
        {item.value} {item.unit}
      </p>
    </div>
  );
}
