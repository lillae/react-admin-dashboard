import React from 'react';
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';

const EditableRow = () => {
    return (
        <StyledRow>
            <td>
                <input type="text" required="required" placeholder="Enter name" name="Product Name"  />
            </td>
            <td>
            <input type="text" required="required" placeholder="Enter description" name="Description"  />
            </td>
            <td>
            <input type="text" required="required" placeholder="$" name="Price"  />
            </td>
            <td>
            <input type="text" required="required" placeholder="%" name="Discount"  />
            
            </td>
            <td>
            <Button type="button" className="btn save"  outlined={true}>Save</Button>
            <Button type="button" className="btn cancel"  outlined={true}>Cancel</Button>
            </td>
        </StyledRow>
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
    .save {
        background: var(--header-bg);
        color: white;
        &:hover {
            background: #7f468de0;
            color:white;
            transition: color 200ms ease-in-out;
        }
    }
    .cancel {
        background: transparent;
        border: 1px solid var(--header-bg);
        
        &:hover {
            border:1px solid #7f468de0;
            background: #cfadd8ce;
            color:white;
            transition: color 200ms ease-in-out;
            
        }
    }

`

export default EditableRow;
