import React from 'react';
import useLocalStorage from '../../../utils/hooks/useLocalStorage';

const styles = {
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
type DayProps = {
  day: Date;
  isCurrentMonth: boolean;
  isSelectedDate: boolean;
  onDateClick: (date: Date) => void;
  cloneDay: Date;
  setDayId: (date: string) => void;
  hasShownAddButton: boolean;
  handleOpenModal: (modalId: 'add' | 'events') => void;
  formattedDate: string;
};
const Day: React.FC<DayProps> = ({
  day,
  isCurrentMonth,
  isSelectedDate,
  onDateClick,
  cloneDay,
  setDayId,
  hasShownAddButton,
  handleOpenModal,
  formattedDate
}) => {
  const [localStorageEvents] = useLocalStorage('event', {});

  const handleDayClick = () => {
    onDateClick(cloneDay);
    setDayId(String(cloneDay));

    handleOpenModal('events');
  };

  const handleAddButtonClick = () => {
    handleOpenModal('add');
    setDayId(String(cloneDay));
  };
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        style={{
          ...styles.day,
          zIndex: 3,
          pointerEvents: `${!isCurrentMonth ? 'none' : 'auto'}`,
          backgroundColor: `${
            !isCurrentMonth ? '#FFAEBC' : isSelectedDate ? '#B4F8C8' : !hasShownAddButton ? 'silver' : 'white'
          }`
        }}
        key={String(day)}
        onClick={handleDayClick}>
        <span>{formattedDate}</span>
        {/* @ts-ignore */}
        {localStorageEvents[String(cloneDay)]?.[0] && (
          <div>
            <p className="button is-small is-info is-rounded mt-5">
              {/* @ts-ignore */}
              {localStorageEvents[String(cloneDay)].length} event(s)
            </p>
          </div>
        )}
      </div>
      {hasShownAddButton && (
        <div onClick={handleAddButtonClick} style={{ ...styles.add, position: 'absolute' }}>
          &#43;
        </div>
      )}
    </div>
  );
};

export default Day;
