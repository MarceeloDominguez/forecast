import { createContext, useContext, useEffect, useReducer } from "react";
import { gatherForecastData } from "../helpers";
import { TYPE_ACTION } from "./typeAction";
import { INITIAL_STATE, weatherReducer } from "./weatherReducer";

const API_KEY = "9899edc22205973101a4c4da882caf6c";
const BASE_URL = `http://api.openweathermap.org/data/2.5/`;

const ContextWeather = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);
  const { data, loading, error } = state;

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("forecast"))) {
      dispatch({
        type: TYPE_ACTION.LOCAL_STORAGE,
        payload: JSON.parse(localStorage.getItem("forecast")),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== INITIAL_STATE) {
      localStorage.setItem("forecast", JSON.stringify(state));
    }
  }, [state]);

  //call the api
  const submitRequest = async (location) => {
    try {
      dispatch({ type: TYPE_ACTION.FETCH_START });
      const data = await fetch(
        `${BASE_URL}forecast?q=${location}&appid=${API_KEY}&units=metric&lang=es&cnt=7`
      );

      if (data.status === 404) {
        return dispatch({ type: TYPE_ACTION.FETCH_ERROR });
      }

      const response = await data.json();

      //recopilar datos del clima en tres objetos y despues enviar al state con dispatch
      const { currentDay, currentDayDetails, upcomingDays } =
        gatherForecastData(response);

      dispatch({
        type: TYPE_ACTION.FETCH_SUCCESS,
        payload: { currentDay, currentDayDetails, upcomingDays },
      });
    } catch (error) {
      dispatch({ type: TYPE_ACTION.FETCH_ERROR });
    }
  };

  return (
    <ContextWeather.Provider value={{ submitRequest, data, loading, error }}>
      {children}
    </ContextWeather.Provider>
  );
};

export const useContextWeather = () => {
  const { ...props } = useContext(ContextWeather);

  return { ...props };
};
