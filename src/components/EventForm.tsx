import React, {FC, useState} from 'react';
import { Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {reformatDate} from "../utils/data";
import {useTypedSelector} from "../hooks/useTypedSelector";


interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}


const EventForm: FC<EventFormProps>= (props) => {

    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: '',
    } as IEvent )

    const {user} = useTypedSelector(state => state.auth)

    const selectDate = (data: Moment | null) => {
        if(data) {
            setEvent({...event, date: reformatDate(data)})
        }
    }

    const submitForm = () =>{
        props.submit({...event, author: user.username})
    }

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={submitForm}
        >
            {/*{error &&*/}
            {/*    <Alert message="Inter incorrect" type="error"/>}*/}
            <Form.Item
                label="Name event"
                name="description"
                rules={[rules.required('Please input description event!')]}
            >
                <Input onChange={e => setEvent({...event, description: e.target.value})} value={event.description}/>
            </Form.Item>

            <Form.Item
                label="Data event"
                name="data"
            >
                <DatePicker
                onChange={(data)=> selectDate(data)}
                />
            </Form.Item>

            <Form.Item
                label="Change guest"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string)=> setEvent({...event, guest})}  placeholder='Choose user'>
                    {props.guests && props.guests.map(user => <Select.Option key={user.username + Math.random()} value={user.username}>{user.username}</Select.Option>)}
                </Select>
            </Form.Item>

            <Row justify="end">
            <Form.Item>
                <Button type="primary" htmlType="submit" >
                    Create
                </Button>
            </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
