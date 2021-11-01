import React, {useState} from 'react';
import { HTMLTable} from "@blueprintjs/core";
import styled from 'styled-components';
import { useProduct } from '../contexts/ProductContext';


const ProductEdit = () => {

    const {allProducts, setAllProducts} = useProduct();

  
    return (
    
        <Wrapper className="wrapper">
            <h1>Edit Products</h1>
            <form action="">
            <HTMLTable interactive={true}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map((product) => 
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.Description}</td>
                            <td>{product.Price}</td>
                            <td>{product.Discount}</td>
                        </tr>
                        )}
                        
                    </tbody>
                </table>
            </HTMLTable>
            </form>
        </Wrapper>
    
    );
}

const Wrapper = styled.div ` 
max-width: 1200px;
width:max-content;
margin: 0px auto;
padding:20px 20px 20px 250px;
form {
    max-width:700px;
    width:100%;

}
table {
    max-width: 100%;
    margin: 25px auto;
    tr {
        max-width:100%;
    }
   
}
z-index: -10;
    @media (max-width:767px) {
        padding: 15px;
    }
`;


export default ProductEdit;

