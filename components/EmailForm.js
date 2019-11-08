import {
  Form,
  Select,
  Input,
  Button
} from 'antd'

const FormItem = Form.Item

const EmailForm= () => (
  <div style={{ marginTop: 100 }}>
    <Form layout='inline'>
      <FormItem>
        <Input size='large' type='email' placeholder="Type in your e-mail address..." style={{ width: 250 }} />
      </FormItem>
      <FormItem>
        <Button size='large' type='primary' htmlType='submit'>
          Request access
        </Button>
      </FormItem>
    </Form>
  </div>
)

export default EmailForm