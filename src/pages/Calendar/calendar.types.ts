type CalendarHeaderProps = {
  prevMonth: () => void;
  nextMonth: () => void;
  currentMonth: number | Date;
}

type CalendaerHeaderDaysProps = {
  currentMonth: number | Date
}

type CalendarDaysProps = {
  currentMonth: number | Date;
  selectedDate: Date;
  onDateClick: (date: Date) => void;
  setDayId: (date: string) => void;
  handleOpenModal: (modalId: 'events' | 'add') => void;
}

type LocalStorageEventType = {
  [key: string]: {
    id: string;
    title: string;
    description: string;
    date: Date
  }[];
}



export type {
  LocalStorageEventType,
  CalendarHeaderProps,
  CalendaerHeaderDaysProps,
  CalendarDaysProps
}