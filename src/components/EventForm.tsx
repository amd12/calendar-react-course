import React, {FC, useLayoutEffect} from 'react';
import {Alert, Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const EventForm: FC= () => {
    const {users, error} = useTypedSelector(state => state.event)

    const {getAllUsersEvent} = useActions()

    useLayoutEffect(() =>{
        getAllUsersEvent()
    } ,[])

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            autoComplete="off"
        >
            {error &&
                <Alert message="Inter incorrect" type="error"/>}
            <Form.Item
                label="Name event"
                name="description"
                rules={[rules.required('Please input description event!')]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Data event"
                name="data"
            >
                <DatePicker/>
            </Form.Item>

            <Form.Item
                label="Change user"
                name="user"
            >
                <Select  placeholder='Choose user'>
                    {users && users.map(user => <Select.Option key={user.username + Math.random()} value={user.username}>{user.username}</Select.Option>)}
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
