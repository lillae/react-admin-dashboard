import React, {useState} from 'react';
import styled from 'styled-components';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';
import { useProduct } from '../contexts/ProductContext';
import { v4 as uuidv4 } from 'uuid';


const AddProducts = () => {
    const {products, setAllProducts, addedProduct, setAddedProduct} = useProduct();
    const [name, setName ] = useState('');
    const [price, setPrice ] = useState('');
    const [description, setDescription ] = useState('');
    const [discount, setDiscount ] = useState('');

    const nameValueHandler = (e) => {
        setName(e.target.value);
    }

    const infoValueHandler = (e) => {
        setDescription(e.target.value);
    }

    const priceValueHandler = (e) => {
        setPrice(e.target.value);
    }

    const discountValueHandler = (e) => {
        setDiscount(e.target.value);
    }

    const addProductHandler = (e) => {

        const newProduct = {
            name: name,
            Description: description,
            Price: price,
            Discount: discount,
            uuid: uuidv4(),
            
        }
        
        if(addedProduct.length > 0) {
            setAddedProduct([...addedProduct, newProduct])
            setAllProducts([...products, ...addedProduct, newProduct]);
        } else {
            setAddedProduct([newProduct])
            setAllProducts([...products, newProduct]);
        }
     
        
        setName('');
        setDescription('');
        setPrice('');
        setDiscount('');
        console.log(addedProduct);
    }
       

    return (
        <Wrapper className="wrapper">
            <h1>Add Products</h1>
            <StyledFormGroup
                label="Product name"
                labelFor="text-input"
                labelInfo="(required)"
                
            >
                <InputGroup id="text-input" placeholder="Product name" value={name} onChange={nameValueHandler}/>
            </StyledFormGroup>
            <StyledFormGroup
                label="Description"
                labelFor="text-input"
                labelInfo="(required)"
                
            >
                <InputGroup id="text-input" placeholder="Description" value={description} onChange={infoValueHandler}/>
            </StyledFormGroup>
            <StyledFormGroup
                label="Price"
                labelFor="text-input"
                labelInfo="(required)"

            >
                <InputGroup id="text-input" placeholder="Price" value={price} onChange={priceValueHandler}/>
            </StyledFormGroup>
            <StyledFormGroup
                label="Discount"
                labelFor="text-input"
                labelInfo="(required)"
            >
                <InputGroup id="text-input" placeholder="Discount" value={discount} onChange={discountValueHandler}/>
            </StyledFormGroup>
            <Button className="submit-btn" type="submit" text="Submit" onClick={addProductHandler}/>
        </Wrapper>
    );
}

const Wrapper = styled.div ` 
max-width: 700px;
width:100%;
margin: 0px auto;
display: flex;
flex-direction: column;
z-index: -10;
padding:20px 20px 20px 250px;
    @media (max-width:767px) {
        padding: 15px;
    }

h1 {
    margin-bottom: 50px;
}
.submit-btn {
margin-top: 15px;
width:30%;
align-self: flex-end;
outline:none;
}
`

const StyledFormGroup = styled(FormGroup) ` 
width:100%;
margin: 15px auto;



`

export default AddProducts;
