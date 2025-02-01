import React from 'react';

const CalendarHeader = ({ selectedDate, onDateChange }) => {
    const handlePrevMonth = () => {
        const newDate = new Date(selectedDate);
        newDate.setMonth(newDate.getMonth() - 1);
        onDateChange(newDate);
    };

    const handleNextMonth = () => {
        const newDate = new Date(selectedDate);
        newDate.setMonth(newDate.getMonth() + 1);
        onDateChange(newDate);
    };

    return (
        <div>
            <button onClick={handlePrevMonth}>Prev Month</button>
            <span>{`${selectedDate.toLocaleString('default', { month: 'long' })} ${selectedDate.getFullYear()}`}</span>
            <button onClick={handleNextMonth}>Next Month</button>
        </div>
    );
};

export default CalendarHeader;