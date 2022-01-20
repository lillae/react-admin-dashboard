import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg/';

const Sidenav = ({ sidebar, setSidebar }) => {
  return (
    <NavWrapper
      className={sidebar ? 'nav-wrapper active' : 'nav-wrapper hidden'}
    >
      <h4>Dashboard</h4>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <FaIcons.FaThList className='icon' />
              All Products
            </Link>
          </li>
          <li>
            <Link to='/edit'>
              <FaIcons.FaRegEdit className='icon' />
              Edit Products
            </Link>
          </li>
          <li>
            <Link to='/add'>
              <CgAddR className='icon' />
              Add Products
            </Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  z-index: 10;
  background: transparent;
  h4 {
    margin-bottom: 10px;
  }
  a {
    color: #ebebeb;
    margin: 10px 0px;
    font-weight: 500;
    display: flex;
    align-items: center;
    &:focus {
      outline: none;
    }
  }
  .icon {
    margin-right: 5px;
  }
`;

export default Sidenav;
