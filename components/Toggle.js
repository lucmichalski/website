import React from 'react'
import { Switch } from 'antd';
import styled from 'styled-components';
import { Moon } from 'styled-icons/boxicons-solid/Moon'
import { Sun } from 'styled-icons/boxicons-solid/Sun'

const StyledSwitch = styled(Switch)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  &.ant-switch {
    background-color: transparent;
    border-color: tomato;
  }
  &.ant-switch-checked {
    background-color: tomato;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <StyledSwitch
      onClick={toggleTheme}
      checkedChildren={<Sun type="check" />}
      unCheckedChildren={<Moon type="close" />}
      defaultChecked={theme === 'light' ? true : false}
    />
  );
};

export default Toggle;