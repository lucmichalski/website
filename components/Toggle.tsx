import React from 'react'
import styled from 'styled-components';
import { Moon } from 'styled-icons/boxicons-solid/Moon'
import { Sun } from 'styled-icons/boxicons-solid/Sun'

const ToggleButton = styled.a`
  position: fixed;
  display: flex;
  bottom: 25px;
  left: 15px;
`;

const StyledMoon = styled(Moon)`
  color: #000;
`;

const StyledSun = styled(Sun)`
  color: #FFF;
`;

const Toggle = ({theme, toggleTheme}) => {
  const isLight = theme === 'light';
  return (
    <ToggleButton
      onClick={toggleTheme}
    >
      {isLight ? <StyledMoon width="25px"/> : <StyledSun width="25px"/>}
    </ToggleButton>
  );
}

export default Toggle;