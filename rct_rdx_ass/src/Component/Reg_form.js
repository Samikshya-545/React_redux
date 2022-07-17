import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './ragform.css';
import {
  //AutoComplete,
  Button,
  //Cascader,
  //Checkbox,
  Col,
  Form,
  Input,
  //InputNumber,
  Row,
  Select,
} from 'antd';

const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ['.com', '.org', '.net'].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      id="reg_form"
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <h2>Sign Up</h2>
      <Row gutter={{ xs: 8, sm: 16 }} id="name_row">
        <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 12 }}>
          <Form.Item
            hasFeedback
            name="firstName"
            label="First name"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please input your first name.',
              },
              {
                min: 2,
                message: 'Your first name must be at least 2 characters.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 12 }}>
          <Form.Item
            hasFeedback
            name="lastName"
            label="Last name"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please input your last name.',
              },
              {
                min: 2,
                message: 'Your last name must be at least 2 characters.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        id="email_margin"
        name="email"
        label="Email Address"
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
        <Input addonAfter={<Button size="small"><span id='button_id'>verify</span></Button>} />
      </Form.Item>
      <Form.Item
        className="less_margin"
        name="phone"
        label="Mobile Number"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[
          {
            type: 'phn_number',
            message: 'The input is not valid Phone Number',
          },
          {
            required: true,
            message: 'Please input your Phone Number!',
          },
          {
            max: 10,
            message: 'enter 10digit phn number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row gutter={{ xs: 8, sm: 16 }} class="less_margin">
        <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 12 }}>
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
        </Col>
        <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 12 }}>
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

                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item id="botton_margin">
        <Button htmlType="submit" id="reg_button">
          Sign Up
        </Button>
      </Form.Item>
      <p>Already have an account?<a><span id="login_href">Login</span></a></p>
    </Form>
  );
};

export default App;
