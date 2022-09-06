const WEEK_DAYS = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const dayInWeek = new Date().getDay();
const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
  WEEK_DAYS.slice(0, dayInWeek)
);

export const getUpcomingDaysForecast = (data) =>
  data.map((day, index) => ({
    temperature_max: Math.round(day.main.temp_max),
    temperature_min: Math.round(day.main.temp_min),
    weatherIcon: `icons/${day.weather[0].icon}.png`,
    weekday: forecastDays[index].substring(0, 3),
  }));
