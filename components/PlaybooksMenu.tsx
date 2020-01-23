import React, { useContext } from 'react'
import { LocaleContext } from '../context/LocaleContext'
import { Row, Col, Menu, Icon } from 'antd';
import styled from 'styled-components'

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

type PlaybooksProps = { 
  areas: any,
  businessRoles: any,
  tools: any
}

const PlaybooksMenu = ({ areas, businessRoles, tools }: PlaybooksProps) => {

  const { locale } = useContext(LocaleContext)
  
  return (
    <>
      <MenuCard>
        <Menu
          style={{ width: 256 }}
          defaultOpenKeys={['areas']}
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
            {areas.map((area) => (
              <Menu.Item key={area.id}>{area[`name_${locale}`]}</Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </MenuCard>
      <MenuCard>
        <Menu
          style={{ width: 256 }}
          defaultOpenKeys={['businessRoles']}
          mode="inline"
          multiple={true}
        >
          <SubMenu
            key="businessRoles"
            title={
              <span>
                <Icon type="mail" />
                <span>Roles</span>
              </span>
            }
          >
            {businessRoles.map((businessRole) => (
              <Menu.Item key={businessRole.id}>{businessRole[`name_${locale}`]}</Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </MenuCard>
      <MenuCard>
        <Menu
          style={{ width: 256 }}
          defaultOpenKeys={['tools']}
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
            {tools.map((tool) => (
              <Menu.Item key={tool.id}>{tool.name}</Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </MenuCard>
    </>
  )
}

export default PlaybooksMenu