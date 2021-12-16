import React, { useState } from 'react';
import Weather from './components/Weather';
import StaticBlocks from './components/StaticBlocks';
import UsersTable from './components/UsersTable';
import Modal from './components/Modal';
import CustomChart from './components/CustomChart';
import CustomCalendar from './components/CustomCalendar';
import SocialInfo from './components/SocialInfo';
import './style-dash.scss';

interface IContainer {
  id: number ,
  component: JSX.Element | undefined
}

const Dashboard = () => {
  const [containers, setConts] = useState<IContainer[]>([]);
  const [isOpen, setOpen] = useState<boolean>(false);
  const blocks = React.useRef<HTMLDivElement[]>([]);

  const openDropdown = (id: number) => {
    blocks.current[id].classList.toggle('display-menu');
  }

  const deleteBox = (id: number) => {
    setConts(containers.filter(item => item.id !== id ));
  }

  const openModal = () => {
    setOpen(true)
  }

  const selectComponent = (type: string) => {
    setConts([...containers, {id: Math.random(), component: switcher(type)}]);
    setOpen(false);
  }

  const switcher = (type: string): JSX.Element | undefined => {
    switch (type) {
      case 'chart':
        return <CustomChart />;

      case 'calendar':
        return <CustomCalendar />;

      case 'static':
        return <StaticBlocks />;

      case 'users':
        return <UsersTable />;

      case 'social':
        return <SocialInfo />;

      default: return;
    }
  }

  return (
    <div className="wrapper">
      <div className="left">
        <div className="left-header">
          <h1>Dashboard</h1> 
        </div> 
        <div className="left-main">
          {containers.map((item, index) => (
            <div className='component-wrapper' key={item.id} >
              <div className="edit-btn" onMouseEnter={() => openDropdown(index)} onMouseLeave={() => openDropdown(index)}>
                <div >
                  <span  className="icon "><i className="fas fa-cog"></i></span>
                </div>
                <div className="dropdownMenu display-menu" ref={(div: HTMLDivElement) => blocks.current[index] = div} >
                  <p className='menu-item'>Edit</p>
                  <p className='menu-item' onClick={() => deleteBox(item.id)} >Delete</p>
                </div>
              </div>
              {item.component}
            </div>
          ))}
          <div className="plus-box">
            <div onClick={openModal} className="icon is-large"><i  className="fas fa-plus fa-5x"></i></div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className='weather-box'>
          <Weather />
        </div>
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen} selectComponent={selectComponent} />
    </div>
  )
};

export default Dashboard;
