import { getCurrentDayDetailedForecast } from "./getCurrentDayDetailedForecast";
import getCurrentDayForecast from "./getCurrentDayForecast";
import { getUpcomingDaysForecast } from "./getUpcomingDaysForecast";

export const gatherForecastData = (response) => {
  const currentDay = getCurrentDayForecast(
    response.list[0],
    response.city.name
  );
  const currentDayDetails = getCurrentDayDetailedForecast(response.list[0]);
  const upcomingDays = getUpcomingDaysForecast(response.list);

  return { currentDay, currentDayDetails, upcomingDays };
};
