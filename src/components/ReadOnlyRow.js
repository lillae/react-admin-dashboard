import React from 'react';
import { Button } from '@blueprintjs/core';

const ReadOnlyrow = ({product, editHandler}) => {
    return (
        <>
            <tr>
                <td>{product.name}</td>
                <td>{product.Description}</td>
                <td>{product.Price}</td>
                <td>{product.Discount}</td>
                <td>
                    <Button type="button" onClick={(e) => editHandler(e, product)} outlined={true}>Edit</Button>
                </td>
            </tr>
        </>
    );
}

export default ReadOnlyrow;
