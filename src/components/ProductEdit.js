import React from 'react';
import { Column, Table2} from "@blueprintjs/table";
import styled from 'styled-components';


const ProductEdit = () => {
    
    return (
    <Wrapper className="wrapper">
        <h1>Edit Products</h1>
        <StyledTable numRows={3}>
            <Column className="col" name="name"/>
            <Column className="col" name="price"/>
            <Column className="col" name = "discount"/>
        </StyledTable>
    </Wrapper>
    );
}

const Wrapper = styled.div ` 
max-width: 1200px;
width:max-content;
margin: 0px auto;
padding:20px 20px 20px 250px;
z-index: -10;
    @media (max-width:767px) {
        padding: 15px;
    }
`
const StyledTable = styled(Table2) `
max-width: 100%;
margin: 50px auto;

`

export default ProductEdit;

