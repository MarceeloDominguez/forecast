import React, { useState } from "react";
import { useContextWeather } from "../context/Context";

export default function Form() {
  const [location, setLocation] = useState("");
  const { submitRequest } = useContextWeather();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;

    submitRequest(location);
    setLocation("");
  };

  return (
    <form
      onClick={onSubmit}
      className="flex justify-center h-full items-center"
    >
      <div className="flex flex-col w-3/4">
        <input
          placeholder="Buscar por ciudad"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          autoFocus
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-3 font-rubik bg-inputBg placeholder-gray-600 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="bg-slate-700 hover:bg-slate-800 text-white font-rubik font-bold tracking-wide my-3 py-2 rounded shadow-lg"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
