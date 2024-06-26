import React from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import './styles/filter-form.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Filters } from '../types/filter-form.types';

const { Option } = Select;

interface FilterFormProps {
    onSubmit: (values: Filters) => void;
    isVisible: boolean;
     onReset: () => void;
}

export const FilterForm: React.FC<FilterFormProps> = ({ onSubmit, isVisible, onReset }) => {

    const [form] = Form.useForm();

    const handleFinish = (values: Filters) => {
        onSubmit(values);
    };

    return (
        <AnimatePresence>
            {
                isVisible ? (

                    <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20  }}
                        exit={{ x: -300 }}
                        className="filter-form-animation"
                    >
                        <Form
                            form={form} onFinish={handleFinish} layout="vertical" className="filter-form">
                            <Form.Item name="organization" label="Organization">
                                <Select placeholder="Select">
                                    <Option value="organization1">Organization 1</Option>
                                    <Option value="organization2">Organization 2</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="username" label="Username">
                                <Input placeholder="User" />
                            </Form.Item>
                            <Form.Item name="email" label="Email">
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item name="date" label="Date">
                                <DatePicker style={{ width: "100%" }} />
                            </Form.Item>
                            <Form.Item name="phoneNumber" label="Phone Number">
                                <Input placeholder="Phone Number" />
                            </Form.Item>
                            <Form.Item name="status" label="Status">
                                <Select placeholder="Select">
                                    <Option value="active">Active</Option>
                                    <Option value="inactive">Inactive</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" className="btn-filter" htmlType="submit">
                                    Filter
                                </Button>
                                <Button htmlType="button" className="reset-btn" onClick={() => {
                                    //  form.resetFields()
                                    onReset();
                                    form.setFieldsValue({
                                        username: '', email: '', organization: '', date: '', phoneNumber: '', status: ''
                                    })
                                }}>
                                    Reset
                                </Button>
                            </Form.Item>
                        </Form>
                    </motion.div>

                ) : null
            }
        </AnimatePresence>
    );
};
