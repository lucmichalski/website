import React from "react";
import { strapiRegister } from "../lib/auth";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

class Signup extends React.Component {

  state = {
    data: {
      email: "",
      username: "",
      password: ""
    },
    loading: false,
    error: ""
  };

  onChange(propertyName, event) {
    const { data } = this.state;
    data[propertyName] = event.target.value;
    this.setState({ data });
  }
  onSubmit() {
    const { data: { email, username, password } } = this.state;
    this.setState({ loading: true });

    strapiRegister(username, email, password)
      .then(() => this.setState({ loading: false }))
      .catch(error => this.setState({ error: error }));
  }

  render() {
    const { error } = this.state;
    return (
      <Row type="flex" justify="center" align="top">
        <Col xs={24} md={14}>
          <h1>Sign Up</h1>
          <Form>
            <Input
              onChange={this.onChange.bind(this, "username")}
              type="text"
              name="username"
              style={{ height: 50, fontSize: "1.2em" }}
            />
            <Input
                onChange={this.onChange.bind(this, "email")}
                type="email"
                name="email"
                style={{ height: 50, fontSize: "1.2em" }}
              />

            <Input
                onChange={this.onChange.bind(this, "password")}
                type="password"
                name="password"
                style={{ height: 50, fontSize: "1.2em" }}
              />
            <Button
                style={{ float: "right", width: 120 }}
                color="primary"
                onClick={this.onSubmit.bind(this)}
              >
                Submit
              </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}
  

export default Signup