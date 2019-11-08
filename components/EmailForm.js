import {Form, Input} from 'antd'

const EmailForm= () => (
  <div style={{ marginTop: 100 }}>
    <Form layout='inline'>
      <Input type='email' size='large' placeholder="Type in your e-mail address..." required style={{ width: 250 }} />
      <input type="submit" class="ant-btn ant-btn-primary ant-btn-lg" value="Request access" />
    </Form>
  </div>
)

export default EmailForm