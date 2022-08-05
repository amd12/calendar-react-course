import React, {FC, useLayoutEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {IEvent} from "../models/IEvent";

const Event:FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleCancel = () => {
        setModalVisible(false);
    };

    const {guests, events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)

    const {fetchGuests, createEvent, fetchEvents} = useActions()

    useLayoutEffect(() =>{
        fetchGuests()
        fetchEvents(user.username)
    } ,[])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        createEvent(event)
    }

    return (
        <>
            <EventCalendar event={events}/>
            <Row justify='center'>
                <Button onClick={() => setModalVisible(true)}>Add event</Button>
               <Modal
               title='Add event'
               visible={modalVisible}
               onCancel={handleCancel}
               footer={false}
               >
                   <EventForm guests={guests}
                   submit={addNewEvent}
                   />
               </Modal>
            </Row>
        </>
    );
};

export default Event;
