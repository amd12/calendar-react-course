import React, {FC, useEffect} from 'react';
import {Alert, Button, Checkbox, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {useActions} from "../hooks/useActions";

const EventForm: FC= () => {


    const {getAllUsers2} = useActions()



    useEffect(() =>{
        console.log(getAllUsers2())
        console.log()
    })


    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"

        >
            {/*{error &&*/}
            {/*    <Alert message="Inter incorrect" type="error"/>}*/}
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
                <Select defaultValue="lucy">
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled" disabled>
                        Disabled
                    </Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
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
