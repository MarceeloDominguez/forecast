import moment from "moment";
import "moment/dist/locale/es";
moment.locale("es");

const getCurrentDayForecast = (data, nameCity) => ({
  weekday: moment(data.applicable_date).format("dddd"),
  date: moment(data.applicable_date).format("ll"),
  location: nameCity,
  temperature: data.main.temp,
  weatherIcon: `icons/${data.weather[0].icon}.png`,
  weatherDescription: data.weather[0].description,
});

export default getCurrentDayForecast;
