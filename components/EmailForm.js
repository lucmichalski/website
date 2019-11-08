import {
  Form,
  Select,
  Input,
  Button
} from 'antd'

const FormItem = Form.Item

const EmailForm= () => (
  <div style={{ marginTop: 100 }}>
  <form>
    <label>
      Name:
      <input type="email" value="arnaud@gmail.com" />
    </label>
    <input type="submit" value="Submit" />
  </form>
  </div>
)

export default EmailForm