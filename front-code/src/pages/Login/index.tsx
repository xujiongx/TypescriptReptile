import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { Redirect } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import qs from 'qs';
interface FormInfo {
  password: string;
  remember: boolean;
}

interface State {
  isLogin: boolean;
}

class Login extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { isLogin: false };
  }
  onFinish = (values: FormInfo) => {
    console.log('Success:', values.password);
    axios
      .post('/api/login', qs.stringify({ password: values.password }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then((res) => {
        if (res.data?.data) {
          this.setState({ isLogin: true });
        } else {
          message.error('登陆失败');
        }
      });
  };
  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const { isLogin } = this.state;
    return isLogin ? (
      <Redirect to='/' />
    ) : (
      <div className='login'>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
