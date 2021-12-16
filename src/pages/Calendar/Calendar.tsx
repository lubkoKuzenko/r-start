import * as dateFns from 'date-fns';
import React, { useState } from 'react';
import './Calendar.module.scss';
import AddEvents from './components/AddEvents';
import CalendarDays from './components/CalendarDays';
import CalendarHeader from './components/CalendarHeader';
import CalendarHeaderDays from './components/CalendarHeaderDays';
import DayEvents from './components/DayEvents';
import Modal from './components/Modal';
import UpcomingEvent from './components/UpcomingEvent';
const styles = {
  wrapper: {
    boxShadow: '-1px -1px 20px -1px rgba(54,54,54,0.71)',
    padding: '3px',
    borderRadius: '6px',
    backgroundColor: '#b4f8c8'
  },
  toggle: {
    cursor: 'pointer',
    fontWeight: 700,
    padding: '10px'
  },
  daysRow: {
    padding: '10px',
    backgroundColor: '#A0E7E5'
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    justifyItems: 'center',
    rowGap: '1px'
  },
  day: {
    width: '100%',
    height: '100px',
    backgroundColor: 'white',
    border: '1px solid silver',
    borderRadius: '6px 6px 0 0',
    margin: '1px',
    boxShadow: '-1px -1px 20px -1px rgba(54,54,54,0.71)',
    cursor: 'pointer',
    color: '#B99095',
    fontWeight: 500,
    padding: '10px',
    fontSize: '18px'
  },
  disabled: {
    pointerEvents: 'none'
  },
  add: {
    cursor: 'pointer',
    padding: '5px',
    bottom: '5px',
    right: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    height: '30px',
    width: '30px',
    fontSize: '20px',
    borderRadius: '50%',
    backgroundColor: '#29A0B1',
    zIndex: 4
  }
};

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpenModal, setIsOpenModal] = useState({
    add: false,
    events: false
  });
  const [dayId, setDayId] = useState<Date | string>('');

  const handleCloseModal = React.useCallback(
    (modal: keyof typeof isOpenModal) => {
      setIsOpenModal({
        ...isOpenModal,
        [modal]: !isOpenModal[modal]
      });
    },
    [isOpenModal]
  );

  const handleOpenModal = React.useCallback((modal: keyof typeof isOpenModal) => {
    setIsOpenModal({
      add: false,
      events: false,
      [modal]: true
    });
  }, []);

  const onDateClick = (day: any) => {
    setSelectedDate(day);
  };
  const nextMonth = () => {
    setCurrentMonth(dateFns.addMonths(currentMonth, 1));
  };
  const prevMonth = () => {
    setCurrentMonth(dateFns.subMonths(currentMonth, 1));
  };

  return (
    <>
      <Modal isOpen={isOpenModal.events} handleClose={() => handleCloseModal('events')}>
        <DayEvents day={dayId} onClick={() => handleCloseModal('events')} />
      </Modal>
      <Modal isOpen={isOpenModal.add} handleClose={() => handleCloseModal('add')}>
        <AddEvents day={dayId} onClick={() => handleCloseModal('add')} />
      </Modal>
      <div style={styles.wrapper}>
        <CalendarHeader prevMonth={prevMonth} nextMonth={nextMonth} currentMonth={currentMonth} />
        <main>
          <CalendarHeaderDays currentMonth={currentMonth} />
          <CalendarDays
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            onDateClick={onDateClick}
            setDayId={setDayId}
            handleOpenModal={handleOpenModal}
          />
        </main>
      </div>
      <UpcomingEvent />
    </>
  );
};

export default Calendar;
