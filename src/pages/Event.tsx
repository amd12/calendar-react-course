import React, {FC, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";

const Event:FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <>
            <EventCalendar event={[]}/>
            <Row justify='center'>
                <Button onClick={() => setModalVisible(true)}>Add event</Button>
               <Modal
               title='Add event'
               visible={modalVisible}
               onCancel={handleCancel}
               footer={false}
               >
                   <EventForm/>
               </Modal>
            </Row>
        </>
    );
};

export default Event;
