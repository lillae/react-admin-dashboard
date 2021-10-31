import React from 'react';
import { Navbar, Button, Alignment} from '@blueprintjs/core';
import styled from 'styled-components';
import { useProduct } from '../contexts/ProductContext';
import Sidenav from './SideNav';


const Header = () => {
    const {toggleSidebar} = useProduct();

    return (
        <>
        <StyledNavbar>
            <StyledGroup align={Alignment.RIGHT}>
                <StyledNavHome>
                    <h2>Store Admin</h2>
                    <Navbar.Divider className="divider"/>
                    <Button className="bp3-minimal" icon="menu" intent="#f5f8fa" text="Menu" onClick={toggleSidebar}/>
                </StyledNavHome>
                    <Button className="bp3-minimal icon-white" icon="user" intent="#f5f8fa" text="User"/>
            </StyledGroup>
        </StyledNavbar>
        <Sidenav/>
        </>
    );
}

const StyledNavbar = styled(Navbar) ` 
padding: 0px 100px 0px 20px;
background: var(--header-bg);
.bp3-minimal {
    color: var(--header-ft);
    outline: none;
    border: 1px solid transparent;
    &:hover {
        color: var(--header-ft);
    }
}
.icon-white {
    color:white;
}
@media(max-width:1023px) {
    padding: 0 20px;
}
`;

const StyledGroup = styled(Navbar.Group) ` 
display: flex;
justify-content: space-between;
width:100%;
`

const StyledNavHome = styled.div ` 
display:flex;
align-items:center;
h2 {
    font-weight: 600;
    color: var(--header-ft);
}
.divider {
    background:#f5f8faa2;

}
`

export default Header;
