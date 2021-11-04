import React from 'react';
import { Button } from '@blueprintjs/core';
import styled from 'styled-components';

const ReadOnlyrow = ({product, editHandler, deleteHandler}) => {
    return (
        <>
            <StyledRow>
                <td>{product.name}</td>
                <td>{product.Description}</td>
                <td>{product.Price}</td>
                <td>{product.Discount}</td>
                <td>
                    <Button type="button" className="btn" onClick={(e) => editHandler(e, product)} outlined={true}>Edit</Button>
                    <Button type="button" className="btn" outlined={true} onClick={() => deleteHandler(product.uuid)}>Delete</Button>
                </td>
            </StyledRow>
        </>
    );
}

const StyledRow = styled.tr `
   max-width:700px;
    width:100%;
    margin:0px auto;
    input {
        width:100%;
    }
    td {
        max-width:100%;
    }
    .btn {
        width:100%;
        margin-bottom: 5px;
    }
   
`

export default ReadOnlyrow;
