import React from "react";
import styled from 'styled-components'
import Link from 'next/link'
import { strapiRegister } from "../lib/auth";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import Logo from '../assets/Logo'

const FormCard = styled.div`
  padding: 60px;
  background: white;
  border: 1px solid ${props => props.theme.bg.borderDarkOnly};
  box-shadow: ${props => props.theme.bg.shadowLightOnly};
  border-radius: 12px;

  .login-form-forgot {
    float: right;
  }

  h1 {
    font-size: 18px;
  }

`

const HeadingGroup = styled.div`
  text-align: center;
  margin-bottom: 12px;
`

type SignupProps = {
  form: any
}


class SignupForm extends React.Component<SignupProps> {
  state = {
    confirmDirty: false
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        strapiRegister(values.username, values.email, values.password)
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" align="middle" style={{height: "100vh"}}>
        <Col xs={24} md={10}>
          <FormCard>
            <HeadingGroup>
              <Logo/>
              <h1>Signup</h1>
            </HeadingGroup>
            <Form onSubmit={this.handleSubmit}>
              <Row type="flex" justify="center" align="middle">
                <Col xs={24} md={{ span: 11 }}>
                  <Form.Item>
                    {getFieldDecorator('firstName', {
                      rules: [{ required: true, message: 'Please input your first name' }],
                    })(
                      <Input
                        placeholder="First Name"
                      />,
                    )}
                  </Form.Item>
                </Col>
                <Col xs={24} md={{ span: 11, offset: 2 }}>
                  <Form.Item>
                    {getFieldDecorator('lastName', {
                      rules: [{ required: true, message: 'Please input your last name' }],
                    })(
                      <Input
                        placeholder="Last Name"
                      />,
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                })(
                  <Input
                    type="email"
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      validator: this.validateToNextPassword,
                    },
                  ],
                })(
                  <Input.Password
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    {
                      validator: this.compareToFirstPassword,
                    },
                  ],
                })(
                  <Input.Password
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    onBlur={this.handleConfirmBlur} 
                    placeholder="Confirm Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <Button type="primary" block htmlType="submit">
                  Sign Up
                </Button>
                Already have an account? <Link href="/signin"><a href="">Login</a></Link>
              </Form.Item>
            </Form>
          </FormCard>
        </Col>
      </Row>
    )
  }
}

const Signup = Form.create({ name: 'signup' })(SignupForm);
export default Signup