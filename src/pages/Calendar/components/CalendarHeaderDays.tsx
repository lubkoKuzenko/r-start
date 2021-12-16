import * as dateFns from 'date-fns';
import React from 'react';
import { CalendaerHeaderDaysProps } from '../calendar.types';

const styles = {
  daysRow: {
    padding: '10px',
    backgroundColor: '#A0E7E5'
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    justifyItems: 'center',
    rowGap: '1px'
  }
};
const CalendarHeaderDays: React.FC<CalendaerHeaderDaysProps> = ({ currentMonth }) => {
  const dateFormat = 'eeee';
  const days = [];
  let startDate = dateFns.startOfWeek(currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <span className="" key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </span>
    );
  }

  return (
    <div style={{ ...styles.row, ...styles.daysRow }} className="days">
      {days}
    </div>
  );
};

export default CalendarHeaderDays;
