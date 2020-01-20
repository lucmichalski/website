import React, { Component } from 'react'
import { Row, Col, Avatar, Tag } from 'antd';
import styled from 'styled-components'

const CardGroup = styled.div `
  background: white;
  width: 100%;
  border-radius: 12px;
  padding: 50px 70px;
  margin: 20px 0;
  box-shadow: rgba(0,0,0,.09) 0 10px 20px 0;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
`

const ToolsGroup = styled.div`
  .ant-avatar {
    margin-left: -0.5rem;
    border: solid 2px #fafafa;
  }
`

const CardContent = styled.div`
  margin-bottom: 1.5rem;
`

const CardTags = styled.div`
`

class PlaybookCard extends React.Component {

  render () {
    return (
      <a href="">
        <CardGroup>
          <CardHeader>
            <h4> Marketing </h4>
            <ToolsGroup>
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
              <Avatar style={{ color: '#000', backgroundColor: '#f9303j' }}>G</Avatar>
            </ToolsGroup>
          </CardHeader>
          <CardContent>
            <h3>Send a real-time Slack notification when a target account is on the website </h3>
          </CardContent>
          <CardTags>
            <Tag>Email</Tag>
            <Tag>Onboarding</Tag>
          </CardTags> 
        </CardGroup> 
      </a>
    )
  }
  
}

export default PlaybookCard