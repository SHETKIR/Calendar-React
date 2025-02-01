import React from 'react';
import CalendarStatic from './CalendarStatic';

const CalendarBody = ({ selectedDate, onDateChange }) => {
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

    const days = [];
    for (let i = 0; i < daysInMonth; i++) {
        const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i + 1);
        days.push(
            <div
                key={i}
                onClick={() => onDateChange(date)}
                style={{
                    fontWeight: date.getMonth() !== selectedDate.getMonth() ? 'normal' : 'bold',
                    color: date.toDateString() === new Date().toDateString() ? 'red' : 'black',
                }}
            >
                {i + 1}
            </div>
        );
    }

    const emptyCells = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        emptyCells.push(<div key={i}></div>);
    }

    return (
        <div>
            <CalendarStatic />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {emptyCells}
                {days}
            </div>
        </div>
    );
};

export default CalendarBody;