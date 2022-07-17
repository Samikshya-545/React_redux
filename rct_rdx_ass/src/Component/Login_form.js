import React from 'react';
import 'antd/dist/antd.css';
import "./login_form.css";
//import './index.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const Login_form = () => {
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
      <Form.Item
        name="email"
        label="Email Adress"
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
            <Input.Password id='pass_inp'/>
          </Form.Item>
          <p id='for_pass'>Forget Password?</p>
      <Form.Item>
        <Button htmlType="submit" onClick={()=>{
          console.log("Done");
        }} className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      <p>Don't have an account?<a><span id='signup_hreaf'>Sign Up</span></a></p>
    </Form>
  );
};

export default Login_form;
