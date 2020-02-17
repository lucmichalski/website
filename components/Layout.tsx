import React from 'react';
import styled from 'styled-components';
import { UserProvider } from '../lib/user';


const Layout =({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading}}>
    { children }
  </UserProvider>
)

export default Layout;