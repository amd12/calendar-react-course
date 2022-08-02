import React, {FC} from 'react';
import { Calendar } from 'antd';
import {Moment} from "moment";
import {CalendarMode} from "antd/es/calendar/generateCalendar";
import {IEvent} from "../models/IEvent";

interface EventCalendarProps{
    event: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = () => {

    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return <Calendar onPanelChange={onPanelChange} />;
};

export default EventCalendar;
