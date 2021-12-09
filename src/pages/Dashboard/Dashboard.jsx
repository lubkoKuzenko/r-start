import React, { useState, useEffect } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './style-dash.scss';
import StaticBlocks from './components/StaticBlocks';
import UsersTable from './components/UsersTable';
import Modal from './components/Modal';


const Dashboard = () => {
  const [position, setPosition] = useState({});
  const [containers, setConts] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const blocks = React.useRef([]);
  
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

  const openDropdown = (id) => {
    blocks.current[id].classList.toggle('dropdownMenu');
  }

  const createBox = () => {
    setConts([...containers, {id: Math.random(), turned: false}]);
    setOpen(true)
  }

  const deleteBox = (id) => {
    setConts(containers.filter(item => item.id !== id ));
  }

  return (
    <div className="wrapper">
      <div className="left">
        <StaticBlocks />

        {containers.map((item, index) => (
          <div key={item.id} className={item.turned ? "box notification turned" : "box notification" }>
            <div className="edit-btn">
              <div onClick={() => openDropdown(index)}>
                <span  className="icon"><i className="fas fa-cog"></i></span>
                <span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true"></i></span>
              </div>
              <div className="box p-2 dropdownMenu" ref={div => blocks.current[index] = div} >
                <p className='menu-item'>Edit</p>
                <p className='menu-item' onClick={() => deleteBox(item.id)} >Delete</p>
              </div>
            </div>
            24
          </div>
        ))}

        <div className="plus-box">
          <div onClick={createBox} className="icon is-large"><i  className="fas fa-plus fa-5x"></i></div>
        </div>

        <div className="notification is-success p-1 users-box">
          <UsersTable />
        </div>
      </div>

      <div className="right">
        <div className='weather-box'>
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

      <Modal isOpen={isOpen} setOpen={setOpen} />
    </div>
  )
};

export default Dashboard;
