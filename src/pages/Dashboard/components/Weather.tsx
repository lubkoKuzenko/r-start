import { useState, useEffect } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

interface IPosition {
  lat?: number | null;
  lon?: number | null;
}

const Weather = () => {
  const [position, setPosition] = useState<IPosition>({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setPosition({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      });
    });
  }, []);

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '92739a4b9fd1fb96fcd7c18a2ba2c855',
    lat: position?.lat,
    lon: position?.lon,
    lang: 'en',
    unit: 'metric' // values are (metric, standard, imperial)
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Lviv"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default Weather;
