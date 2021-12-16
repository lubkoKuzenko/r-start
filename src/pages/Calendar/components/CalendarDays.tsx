import * as dateFns from 'date-fns';
import React from 'react';
import { CalendarDaysProps } from '../calendar.types';
import Day from './Day';
const styles = {
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    justifyItems: 'center',
    rowGap: '1px'
  }
};
const CalendarDays: React.FC<CalendarDaysProps> = ({
  currentMonth,
  selectedDate,
  onDateClick,
  setDayId,
  handleOpenModal
}) => {
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const dateFormat = 'd';
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      const cloneDay = day;
      const isCurrentMonth = dateFns.isSameMonth(day, monthStart);
      const isDayAfterToday = dateFns.isAfter(cloneDay, new Date());
      const isToday = dateFns.isToday(cloneDay);
      const hasShownAddButton = (isCurrentMonth && isDayAfterToday) || isToday;
      const isSelectedDate = dateFns.isSameDay(day, selectedDate);

      days.push(
        <Day
          key={String(day)}
          day={day}
          isCurrentMonth={isCurrentMonth}
          isSelectedDate={isSelectedDate}
          onDateClick={onDateClick}
          cloneDay={cloneDay}
          setDayId={setDayId}
          hasShownAddButton={hasShownAddButton}
          handleOpenModal={handleOpenModal}
          formattedDate={formattedDate}
        />
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(
      <div style={styles.row} key={String(day)}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="">{rows}</div>;
};

export default CalendarDays;
