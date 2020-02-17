import React from 'react';
import { Row, Col, Form, Icon, Input, Button } from 'antd';

type WhitePaperFormProps = {
  form: any
}

class NormalLoginForm extends React.Component<WhitePaperFormProps> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Row type="flex" justify="center" align="middle">
          <Col xs={24} md={{ span: 11 }}>
            <Form.Item>
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your first name' }],
              })(
                <Input
                  placeholder="Prénom"
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
                  placeholder="Nom"
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
          <Button type="primary" htmlType="submit" block>
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm