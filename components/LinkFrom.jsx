import React from 'react'
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LinkFrom = () => {

    const [form] = Form.useForm();

      const onFinish = (values) => {
        console.log(values);
      };
    
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="Link"
        label="Link"
        rules={[
          {
            required: true,
          },
        ]}
      >
    <Input />
      </Form.Item>
      <Form.Item
        name="Name"
        label="Website Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
    <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
    </Form>
  )

}

export default LinkFrom