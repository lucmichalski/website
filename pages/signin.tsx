import React from "react";
import styled from 'styled-components'
import Link from 'next/link'
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

type SigninProps = {
  form: any
}


class SigninForm extends React.Component<SigninProps> {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
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
              <h1>Signin</h1>
            </HeadingGroup>
            <Form onSubmit={this.handleSubmit}>
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
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a href="" className="login-form-forgot">
                  Forgot password
                </a>
                <Button type="primary" block htmlType="submit">
                  Log in
                </Button>
                Or <Link href="/signup"><a href="">register now!</a></Link>
              </Form.Item>
            </Form>
          </FormCard>
        </Col>
      </Row>
    )
  }
}

const Signin = Form.create({ name: 'signup' })(SigninForm);
export default Signin