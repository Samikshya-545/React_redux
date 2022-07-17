import React from 'react';
import 'antd/dist/antd.css';
import './resetpass.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


const Resetpass_form = () => {
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
      <h2>Reset Password</h2>
      <Form.Item
        name="password"
        label="Password"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password id="comf_inp"/>
      </Form.Item>

      <Form.Item>
        <Button id="submit_btn" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      <p>Back To Login</p>
    </Form>
  );
};

export default Resetpass_form;