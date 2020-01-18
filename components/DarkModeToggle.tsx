import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Switch } from 'antd';
import styled from 'styled-components'

const StyledSwitch = styled(Switch)`
  &.ant-switch {
    background-color: rgb(68,68,68,.8);
  }


`

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <StyledSwitch checked={darkMode.value} onChange={darkMode.toggle} checkedChildren="🌙" unCheckedChildren="☀️" />
  );
};

export default DarkModeToggle;