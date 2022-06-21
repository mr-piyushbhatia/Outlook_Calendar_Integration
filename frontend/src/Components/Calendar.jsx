import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = []

function App() {
    const [allEvents, setAllEvents] = useState(events);

    const abc = async ()=>{
        
        const x = await axios.get('/api/sync')
        // console.log(x.data)
        for(const element of x.data) {
            let newEvent={}
            newEvent.start = new Date('\''+element.Start.DateTime.substr(0,10)+'\'')
            newEvent.end = new Date('\''+element.End.DateTime.substr(0,10)+'\'')
            newEvent.title = element.Subject
            newEvent.allDay = element.IsAllDay
            // console.log(newEvent)
            await setevent(newEvent)
        };  
    }
    const setevent = (newEvent)=>{
        return new Promise((resolve,reject)=>{
                setAllEvents((prev)=>[...prev, newEvent]);
                resolve()
        })
    }
    useEffect(() => {
            abc()
    }, [])
    

    return (
        <div className="App">
            <h1>Calendar</h1>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default App;
