import React, {FC} from 'react';
import {Badge, Calendar } from 'antd';
import {Moment} from "moment";
import {CalendarMode} from "antd/es/calendar/generateCalendar";
import {IEvent} from "../models/IEvent";
import type {BadgeProps} from 'antd'
import {reformatDate} from "../utils/data";

interface EventCalendarProps{
    event: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = (props) => {


    const dateCellRender = (value: Moment) => {
        const formatDate = reformatDate(value);

        const currentDayEvents = props.event.filter(event => event.date === formatDate)
        return (
            <ul className="events">

                {currentDayEvents.map((item, index) => (
                    <li key={index}>
                        <Badge status={item.guest as BadgeProps['status']} text={item.description} />
                    </li>
                ))}

            </ul>
        );
    };

    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return <Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange} />;
};

export default EventCalendar;
