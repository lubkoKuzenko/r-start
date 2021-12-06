import React, { useState, useEffect } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Dashboard = () => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setPosition({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      })
    })
  }, []);
  
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '92739a4b9fd1fb96fcd7c18a2ba2c855',
    lat: position?.lat,
    lon: position?.lon,
    lang: 'en',
    unit: 'metric' // values are (metric, standard, imperial)
  });
 
  return (
    <div className="columns">
      <div className="column is-9">
        <div className="columns">
          <div className="column">
            <div className="box">4</div>
          </div>
          <div className="column">
            <div className="box">4</div>
          </div>
          <div className="column">
            <div className="box"></div>
          </div>
        </div>
      </div>
      <div className="column is-3">
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Lviv"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
      </div>
    
    </div>
  )
};

export default Dashboard;
