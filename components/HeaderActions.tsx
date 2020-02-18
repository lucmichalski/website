import React from 'react';
import styled from 'styled-components'
import { Button } from 'antd'
import Link from 'next/link'

const ButtonsGroup = styled.div`
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .btn-rounded {
    border-radius: 22px;
    background-color: transparent;
    color: #1EB650;
    border-color: #1EB650;
  }

`

type ActionsProps = {
  showActions: boolean;
};

const HeaderActions = ({ showActions }: ActionsProps) => {
  if (showActions) {
    return (
      <ButtonsGroup>
        <Link href="/signup" as="/signup">
          <Button type="link" className="theme-color">Se connecter</Button>
        </Link>
        <Link href="/signin" as="/signin">
          <Button className="btn-rounded">S'inscrire</Button>
        </Link>
      </ButtonsGroup>
    )
  } else return null
  
}

export default HeaderActions;