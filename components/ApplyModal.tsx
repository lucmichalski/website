import React from 'react'
import { Modal, Button } from 'antd';

type ApplyProps = {
  offer: any
};

class ApplyModal extends React.Component<ApplyProps> {

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {

    const { offer } = this.props

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Postuler
        </Button>
        <Modal
          title={offer.job_title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ApplyModal