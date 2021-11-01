import React from 'react';
import { Column, Table2,  ColumnHeaderCell, EditableCell2, EditableName,Cell } from "@blueprintjs/table";
import styled from 'styled-components';
import { useProduct } from '../contexts/ProductContext';

const ProductEdit = () => {
    const {products, setProducts} = useProduct();

    
    return (
    <Wrapper>
        <h1>Edit Products</h1>
        <StyledTable numRows={3}>
            <Column className="col" name="name" cellRenderer={products.name}/>
            <Column className="col" name="price"/>
            <Column className="col" name = "discount"/>
        </StyledTable>
    </Wrapper>
    );
}

const Wrapper = styled.div ` 
padding:20px 20px 20px 250px;
max-width: 1200px;
width:max-content;
margin: 0px auto;
`
const StyledTable = styled(Table2) `
max-width: 100%;
margin: 50px auto;

`

export default ProductEdit;

