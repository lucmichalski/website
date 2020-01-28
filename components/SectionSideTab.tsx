import React from 'react'
import { Row, Col, Collapse, Icon } from 'antd';
import styled from 'styled-components'
import { MenuIcon, ValidIcon, InfiniteIcon } from '../assets/Icons'

const { Panel } = Collapse;

const SectionGroup = styled.div`
  padding: 100px 0;

  h2 {
    text-align: center;
  }
`
const StyledCollapse = styled(Collapse)`
  &.ant-collapse {
    background-color: transparent;
  }

  .ant-collapse-item {
    border-bottom: 1px solid #333;
  }

`

const HeaderPanel = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  h4 {
    color: ${props => props.theme.text.primary};
    font-size: 20px;
    margin-left: 16px;
    margin-bottom: 0;
  }
`


type SectionSideTabProps = { 
  title: string,
  description: string,
  visualOrder: number, 
  contentOrder: number,
}

const headerOne = () => (
  <HeaderPanel>
    <MenuIcon />
    <h4>Allez plus loin que l’existant</h4>
  </HeaderPanel>
  
);

const headerTwo = () => (
  <HeaderPanel>
    <ValidIcon />
    <h4>Comprenez ce qui fonctionne vraiment</h4>
  </HeaderPanel>
);

const headerTree = () => (
  <HeaderPanel>
    <InfiniteIcon />
    <h4>Votre site devient agile & modulable</h4>
  </HeaderPanel>

);


class SectionSideTab extends React.Component<SectionSideTabProps> {
  render() {
    return (
      <SectionGroup>
        <Row type="flex" justify="center" align="middle">
          <Col xs={{span: 24}} md={{span: 14 }}>
            <h2>{this.props.title}</h2>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col xs={{span: 24, order: 1}} md={{span: 12, order: this.props.visualOrder}}>
            <img src="/screen-optimize2.png" width="100%"/>
          </Col>
          <Col xs={{span: 24, order: 2}} md={{span: 10, order: this.props.contentOrder, offset: 2}}>
            <StyledCollapse accordion bordered={false} defaultActiveKey={['1']}>
              <Panel header={headerOne()} showArrow={false} key="1">
                <p>Chez Grimp, nous sommes des experts de l’AB testing avec Google Optimize. On conçoit, teste, évalue en accord direct avec nos clients.</p>
              </Panel>
              <Panel header={headerTwo()} showArrow={false} key="2">
                <p>Ne vous ennuyez pas à comprendre les données de votre site, nous le faisons pour vous et apportons des modifications subséquentielles sur votre site internet.</p>
              </Panel>
              <Panel header={headerTree()} showArrow={false} key="3">
                <p>Ne vous ennuyez pas à comprendre les données de votre site, nous le faisons pour vous et apportons des modifications subséquentielles sur votre site internet.</p>
              </Panel>
            </StyledCollapse>
          </Col>
        </Row>
      </SectionGroup>
    )
  }
}

export default SectionSideTab;