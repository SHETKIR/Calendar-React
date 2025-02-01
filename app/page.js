'use client';

import React from 'react';
import MonthCalendar from './MonthCalendar';

const App = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    return (
        <div>
            <h1>Calendar</h1>
            <MonthCalendar selectedDate={selectedDate} onDateChange={handleDateChange} />
        </div>
    );
};

export default App;