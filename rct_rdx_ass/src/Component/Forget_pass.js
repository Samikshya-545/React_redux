import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const App = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h2 id="for_pass_h">Forget Password</h2>
      <p>Please enter your email and we will send you a password reset link</p>
      <Form.Item
        name="email"
        label="Email"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      <p>Back To Login</p>
    </Form>
  );
};

export default App;
