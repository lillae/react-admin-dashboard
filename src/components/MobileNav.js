import React from 'react';
import styled from 'styled-components';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import {Link} from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import * as FaIcons from 'react-icons/fa';
import {CgAddR} from 'react-icons/cg/';

const Mobilenav = () => {
    return (
        <StyledNavbar>
          <StyledNavGroup>
                <ul>
                    <li>
                    <Link className="bp3-minimal" to='/'><FaIcons.FaThList className='icon' />View All</Link> 
                    </li>
                    <li>
                    <Link to='/edit'><FaIcons.FaRegEdit className='icon' />Edit</Link>
                    </li>
                    <li>
                    <Link to='/add'><CgAddR className="icon"/>Add</Link> 
                    </li>
                </ul>
            </StyledNavGroup>
    </StyledNavbar>
    );
}

const StyledNavbar = styled(Navbar) ` 
background:var(--header-bg);
width:100%;
max-width:100%;
height:3rem;
position: fixed;
bottom:0;
left:0;
color:white;
display: flex;
align-items: center;
`

const StyledNavGroup = styled.nav ` 
width:100%;
max-width:340px;
justify-content: center;
margin: 0px auto;
.bp3-minimal {
    color: var(--header-ft);
    outline: none;
    border: 1px solid transparent;
    &:hover {
        color: var(--header-ft);
    }
}
.divider {
    background:#f5f8faa2;
}
ul {
    display: flex;
    justify-content: space-around;
    align-items:center;
}
a {
    text-decoration: none;
    color:white;
    display: flex;
    align-items: center;
    
}
.icon {
    margin-right: 5px;
}
` 

    



export default Mobilenav;