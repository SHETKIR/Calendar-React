import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

const MonthCalendar = ({ selectedDate, onDateChange }) => {
    return (
        <div>
            <CalendarHeader selectedDate={selectedDate} onDateChange={onDateChange} />
            <CalendarBody selectedDate={selectedDate} onDateChange={onDateChange} />
        </div>
    );
};

export default MonthCalendar;