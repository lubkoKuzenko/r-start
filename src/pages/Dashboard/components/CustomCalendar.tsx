import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCal.scss';

const CustomCalendar = () => {
  return (
    <div className="calendar-card single-card">
      <Calendar />
    </div>
  );
};

export default CustomCalendar;