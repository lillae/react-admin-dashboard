import React, {useEffect} from 'react';
import axios from 'axios';
import { productsURL } from '../api';
import ProductCard from './ProductCard';
import { useProduct } from '../contexts/ProductContext';
import styled from 'styled-components';


const Products = () => {
    const {products, setProducts} = useProduct();

    useEffect(() => {
        async function fetchProduct() {
            const res =  await axios.get(productsURL());
            setProducts(res.data);
            return res;
        }
        fetchProduct();
        
    }, [setProducts]);

    console.log(products);

    return (
      <Wrapper>
        <h1>All Products</h1>
        <Cards>
            {products.map(product => (
                <ProductCard name={product.name} description={product.Description} price={product.Price} discount={product.Discount} key={products.uuid}/>
            ))}
        </Cards>
     </Wrapper>
    )
}

const Wrapper = styled.div ` 
display: flex;
align-items: center;
flex-direction: column;
max-width: 1600px;
width:100%;
padding: 20px;
margin: 50px auto 0px;
h1 {
    font-size: 2.2rem;
}

`;

const Cards = styled.div `
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-auto-rows: 320px;
justify-content: center;
max-width:100%;
margin-top: 50px;
`;

export default Products;