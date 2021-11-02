import React, {useState} from 'react';
import { EditableText, HTMLTable} from "@blueprintjs/core";
import styled from 'styled-components';
import { useProduct } from '../contexts/ProductContext';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';


const ProductEdit = () => {

    const {allProducts, setAllProducts} = useProduct();
    const [editProductId, setEditProductId] = useState(null);

    const editHandler = (e, product) => {
        e.preventDefault();
        setEditProductId(product.uuid)
    }
  
    return (
    
        <Wrapper className="wrapper">
            <h1>Edit Products</h1>
            <form action="">
            <HTMLTable className="bp3-html-table " interactive={true}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map((product) => 
                        <>
                        {editProductId === product.uuid ? <EditableRow/> : <ReadOnlyRow  product={product} editHandler={editHandler}/>}
                       </> 
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
}

z-index: -10;
    @media (max-width:767px) {
        padding: 15px;
    }
`;


export default ProductEdit;

