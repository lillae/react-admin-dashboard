import React, {useState} from 'react';
import { HTMLTable} from "@blueprintjs/core";
import styled from 'styled-components';
import { useProduct } from '../../contexts/ProductContext';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const ProductEdit = () => {

    const {allProducts, setAllProducts, setEditedItems} = useProduct();
    const [editProductId, setEditProductId] = useState(null);
    const [editForm, setEditForm] = useState({
        name: "",
        Description: "",
        Price: "",
        Discount: "",
    })

    const saveEditHandler = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newForm = {...editForm};
        newForm[fieldName] = fieldValue;
        setEditForm(newForm);
    }

    const editHandler = (e, product) => {
        e.preventDefault();
        setEditProductId(product.uuid);

        const formValues = {
            name: product.Name,
            Description: product.Description,
            Price: product.Price,
            Discount: product.Discount
        }

        setEditForm(formValues);
    }

   const submitEditsHandler = (e) => {
        e.preventDefault();

        const editedProduct = {
            name: editForm.name,
            Description: editForm.Description,
            Price: editForm.Price,
            Discount: editForm.Discount,
            uuid: editProductId
        }

        const newProducts = [...allProducts];

        const index = allProducts.findIndex((product) => product.uuid === editProductId);

        newProducts[index] = editedProduct;
        setAllProducts(newProducts);
        setEditedItems(true);
        setEditProductId(null);

   }

   const cancelHandler = () => {
       setEditProductId(null);
   }

   const deleteHandler = (productId) => {
    const newProducts = [...allProducts];

    const index = allProducts.findIndex((product) => product.uuid === productId);

    newProducts.splice(index, 1);
   
    setAllProducts(newProducts);
    setEditedItems(true);
  };

  
    return (
    
        <Wrapper className="wrapper">
            <h1>Edit Products</h1>
            <form onSubmit={submitEditsHandler}>
            <HTMLTable className="bp3-html-table " interactive={true} bordered={true}>
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
                        {!! allProducts.length && (allProducts.map((product) => 
                        <>
                        {editProductId === product.uuid ? <EditableRow key={product.uuid} editForm={editForm} saveEditHandler={saveEditHandler} cancelHandler={cancelHandler} /> : <ReadOnlyRow key={product.uuid}  product={product} editHandler={editHandler} deleteHandler={deleteHandler}/>}
                       </> 
                    ))}
                    </tbody>
            </HTMLTable>
            </form>
        </Wrapper>
    
    );
}

const Wrapper = styled.div ` 
max-width: 1200px;
width:100%;
margin: 0px auto;
padding:60px 20px 20px 250px;
form {
    max-width:700px;
    width:100%;
    overflow-x:auto;
    margin: 15px auto;
}
table {
    width:700px;
    margin: 25px auto;
}

z-index: -10;
    @media (max-width:767px) {
        padding: 15px;
    }
`;


export default ProductEdit;

