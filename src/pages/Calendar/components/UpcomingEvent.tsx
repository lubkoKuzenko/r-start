import React from 'react';
import * as dateFns from 'date-fns';
import useLocalStorage from '../../../utils/hooks/useLocalStorage';

const UpcomingEvent: React.FC = () => {
  const [localStorageEvents] = useLocalStorage<{ [key: string]: { title: string; description: string; date: Date }[] }>(
    'event',
    {}
  );

  const upcomingFirstEventObject =
    localStorageEvents[
      Object.keys(localStorageEvents).sort(function (a, b) {
        //@ts-ignore
        return new Date(a) - new Date(b);
      })?.[0]
    ]?.[0];
  const format = React.useMemo(() => 'd MMMM yyyy', []);

  return (
    <>
      {upcomingFirstEventObject?.title && upcomingFirstEventObject.description && upcomingFirstEventObject?.date && (
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">Upcoming event</h4>
          </div>
          <div className="card-content">
            <p className="box">Date: {dateFns.format(new Date(upcomingFirstEventObject?.date), format)}</p>
            <p className="box">{upcomingFirstEventObject?.title}</p>
            <p className="box">{upcomingFirstEventObject?.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UpcomingEvent;
