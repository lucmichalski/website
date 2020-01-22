import React, { Component, useContext } from 'react'
import { Row, Col, Menu, Icon } from 'antd';
import styled from 'styled-components'
import { LocaleContext } from '../context/LocaleContext'

const { SubMenu } = Menu;

const MenuCard = styled.div`
  background: ${props => props.theme.bg.matt};
  width: 256px;
  border-radius: 12px;
  padding: 14px 0 12px;
  margin: 20px 0;
  box-shadow: rgba(0,0,0,.09) 0 10px 20px 0;

  
  .ant-menu {
    background: ${props => props.theme.bg.matt};
    border-color: ${props => props.theme.bg.shade};

    li {
      color: ${props => props.theme.text.primary};
    }

    .ant-menu-item-selected {
      background-color: ${props => props.theme.bg.selected};
    }
  }
`

const PlaybooksMenu = () => {

  const { locale } = useContext(LocaleContext)

  return (
    <>
      <MenuCard>
        <Menu
          style={{ width: 256 }}
          defaultOpenKeys={['areas', 'roles', 'tools']}
          mode="inline"
          multiple={true}
        >
          <SubMenu
            key="areas"
            title={
              <span>
                <Icon type="mail" />
                <span>Areas</span>
              </span>
            }
          >
            <Menu.Item key="1">Analytics</Menu.Item>
            <Menu.Item key="2">Email</Menu.Item>
            <Menu.Item key="3">Enrichment</Menu.Item>
            <Menu.Item key="4">Lead qualification</Menu.Item>
            <Menu.Item key="5">Notifications</Menu.Item>
            <Menu.Item key="6">Onboarding</Menu.Item>
            <Menu.Item key="7">Personalisation</Menu.Item>
            <Menu.Item key="8">Product & Growth</Menu.Item>
          </SubMenu>
        </Menu>
      </MenuCard>
      <MenuCard>
        <Menu
          style={{ width: 256 }}
          defaultOpenKeys={['areas', 'roles', 'tools']}
          mode="inline"
          multiple={true}
        >
          <SubMenu
            key="roles"
            title={
              <span>
                <Icon type="mail" />
                <span>Roles</span>
              </span>
            }
          >
            <Menu.Item key="1">Marketing</Menu.Item>
            <Menu.Item key="2">Sales</Menu.Item>
          </SubMenu>
        </Menu>
      </MenuCard>
      <MenuCard>
        <Menu
          style={{ width: 256 }}
          defaultOpenKeys={['areas', 'roles', 'tools']}
          mode="inline"
          multiple={true}
        >
          <SubMenu
            key="tools"
            title={
              <span>
                <Icon type="mail" />
                <span>Tools</span>
              </span>
            }
          >
            <Menu.Item key="1">{locale}</Menu.Item>
            <Menu.Item key="2">Lemlist</Menu.Item>
          </SubMenu>
        </Menu>
      </MenuCard>
    </>
  )
}

export default PlaybooksMenu