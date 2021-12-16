import React from 'react';
import * as dateFns from 'date-fns';
import { CalendarHeaderProps } from '../calendar.types';

const styles = {
  toggle: {
    cursor: 'pointer',
    fontWeight: 700,
    padding: '10px'
  }
};
const CalendarHeader: React.FC<CalendarHeaderProps> = ({ prevMonth, nextMonth, currentMonth }) => {
  const format = 'MMMM yyyy';
  return (
    <header className="header">
      <div>
        <div style={styles.toggle} className="toggle" onClick={prevMonth}>
          &#5176;
        </div>
      </div>
      <div>
        <span className="toggle">{dateFns.format(currentMonth, format)}</span>
      </div>
      <div style={styles.toggle} onClick={nextMonth} className="col col-end">
        &#5171;
      </div>
    </header>
  );
};

export default CalendarHeader;
