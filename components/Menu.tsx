import React, { Component } from 'react'
import { Row, Col, Avatar, Tag } from 'antd';
import styled from 'styled-components'

const CardGroup = styled.div `
 
`

class MenuNav extends React.Component {

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