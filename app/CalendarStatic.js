import React from 'react';

const CalendarStatic = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {daysOfWeek.map((day, index) => (
                <div key={index}>{day}</div>
            ))}
        </div>
    );
};

export default CalendarStatic;