import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';
import { useProduct } from '../../contexts/ProductContext';
import { v4 as uuidv4 } from 'uuid';


const AddProducts = () => {
    const {setAllProducts, addedProduct, setAddedProduct, allProducts, setIsAdded ,isAdded} = useProduct();
    const [name, setName ] = useState('');
    const [price, setPrice ] = useState('');
    const [description, setDescription ] = useState('');
    const [discount, setDiscount ] = useState('');

    useEffect(() => {
        setTimeout(() => {
          if(isAdded) setIsAdded(false);
        }, 2500);
    
      }, [isAdded]);
      

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
            setAllProducts([newProduct, ...allProducts]);
        } else {
            setAddedProduct([newProduct])
            setAllProducts([ newProduct, ...allProducts]);
        }
     
        setIsAdded(true);
        setName('');
        setDescription('');
        setPrice('');
        setDiscount('');
    }

    
       

    return (
        <Wrapper className="wrapper">
            <h1>Add Products</h1>
            {isAdded && <p>Product has been added</p>}
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
padding:60px 20px 20px 250px;
p{
    color: white;
    background: #2da778c0;
    padding:10px;
}
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
