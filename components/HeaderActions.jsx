  
import React, { useState } from 'react';
import styled from 'styled-components'
import { Button } from 'antd'
import Link from 'next/link'

import { useUser } from '../lib/user';
import { setToken, unsetToken } from '../lib/auth';

const ButtonsGroup = styled.div`
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

const HeaderActions = () => {
  return (
    <ButtonsGroup>
      <Link href="/signup" as="/signup">
        <Button type="link" className="theme-color">Se Connecter</Button>
      </Link>
      <Link href="/signin" as="/signin">
        <Button type="primary" className="btn-rounded">S'inscrire</Button>
      </Link>
    </ButtonsGroup>
  )
}

export default HeaderActions;