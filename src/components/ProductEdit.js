import React from 'react';
import { Column, Table2 } from "@blueprintjs/table";
import styled from 'styled-components';

const ProductEdit = () => {
    return (
    <Wrapper>
        <h1>Edit Products</h1>
        <StyledTable>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
        </StyledTable>
    </Wrapper>
    );
}

const Wrapper = styled.div ` 
padding:20px 20px 20px 250px;
max-width: 1200px;
width:100%;
margin: 0px auto;
`
const StyledTable = styled(Table2) `
max-width: 100%;
margin-top: 50px;
`

export default ProductEdit;

