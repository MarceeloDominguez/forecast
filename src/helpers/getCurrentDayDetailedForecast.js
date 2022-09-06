export const getCurrentDayDetailedForecast = (data) => [
  {
    name: "Temp Max",
    value: Math.round(data.main.temp_max),
    unit: "°C",
  },
  {
    name: "Temp Min",
    value: Math.round(data.main.temp_min),
    unit: "°C",
  },
  {
    name: "Humedad",
    value: data.main.humidity,
    unit: "%",
  },
  {
    name: "Sensación térmica",
    value: Math.round(data.main.feels_like),
    unit: "°C",
  },
  {
    name: "Visibilidad",
    value: Math.round(data.visibility / 1000),
    unit: "km",
  },
  {
    name: "Viento",
    value: Math.round(data.wind.speed),
    unit: "km/h",
  },
  {
    name: "Prob. de precipitaciones",
    value: data.pop * 100,
    unit: "%",
  },
];
