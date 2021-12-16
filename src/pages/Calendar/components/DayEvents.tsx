import React from 'react';
import useLocalStorage from '../../../utils/hooks/useLocalStorage';
import { LocalStorageEventType } from '../calendar.types';

const DayEvents: React.FC<{ onClick: () => void; day: Date | string }> = ({ onClick, day }) => {
  const [localStorageEvent, setLocalStorageEvent] = useLocalStorage<LocalStorageEventType>('event', {});

  const handleDelete = (id: Date | string) => {
    const filter = {
      ...localStorageEvent,
      [String(day)]: localStorageEvent[String(day)].filter(item => item.id !== id)
    };
    if (filter[String(day)].length === 0) {
      delete filter[String(day)];
    }
    setLocalStorageEvent(filter);
  };
  return (
    <div onClick={onClick}>
      {!localStorageEvent[String(day)]?.[0] && (
        <div className="box">
          <div className="">
            <h4 className="card-header card-header-title" style={{ color: 'red' }}>
              You don't have some event for this day
            </h4>
          </div>
        </div>
      )}
      {localStorageEvent[String(day)]?.map(
        ({ title, description, id }: { title: string; description: string; id: string | Date }, i: number) => (
          <div key={String(i)} className="box">
            <div className="">
              <div className="card-header">
                <h4 className="card-header-title">
                  {i + 1}. {title}
                </h4>
                <button onClick={() => handleDelete(id)} className="button is-danger">
                  Delete
                </button>
              </div>
              <p className="card-content">{description}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DayEvents;
