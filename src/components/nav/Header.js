import React, { useState, useEffect } from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import styled from 'styled-components';
import Sidenav from './SideNav';
import Mobilenav from './MobileNav';

const Header = () => {
  const [sidebar, setSidebar] = useState(openSideNav);
  const isMobile = window.innerWidth < 767;

  function openSideNav() {
    return window.innerWidth > 767;
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSidebar(openSideNav());
    });
  }, []);

  return (
    <>
      <StyledNavbar className='bp3-navbar'>
        <StyledGroup align={Alignment.RIGHT}>
          <StyledNavHome>
            <h2>Store Admin</h2>
            <Navbar.Divider className='divider' />
          </StyledNavHome>
          <Button
            className='bp3-minimal icon-white'
            icon='user'
            intent='#f5f8fa'
            text='Sign out'
          />
        </StyledGroup>
      </StyledNavbar>
      {!isMobile ? (
        <Sidenav sidebar={sidebar} setSidebar={setSidebar} />
      ) : (
        <Mobilenav />
      )}
    </>
  );
};

const StyledNavbar = styled(Navbar)`
  padding: 0px 100px 0px 20px;
  background: transparent;
  box-shadow: none;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  .bp3-minimal {
    color: var(--header-ft);
    outline: none;
    border: 1px solid transparent;
    &:hover {
      color: var(--header-ft);
    }
  }
  .icon-white {
    color: white;
  }
  @media (max-width: 1023px) {
    padding: 0 20px;
  }
  @media (min-width: 768px) {
    .menuBtn {
      display: none;
    }
  }
`;

const StyledGroup = styled(Navbar.Group)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledNavHome = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-weight: 600;
    color: var(--header-ft);
    @media (max-width: 767px) {
      font-size: 1.2rem;
    }
  }
  .divider {
    background: #f5f8faa2;
  }
`;

export default Header;
