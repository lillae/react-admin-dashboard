import React, {useEffect} from 'react';
import axios from 'axios';
import { productsURL } from '../api';
import ProductCard from './ProductCard';
import { useProduct } from '../contexts/ProductContext';
import styled from 'styled-components';



const Products = () => {
    const {products, setProducts, addedProduct, setAllProducts, allProducts} = useProduct();

    useEffect(() => {
        async function fetchProducts() {
            const res = await axios.get(productsURL()).catch(err => console.log(err));
            
            if(res) {
            setProducts(res.data);
            if(allProducts.length === 0) {
                setAllProducts([...products]);
            } 
            if(allProducts.length > 0) {
                setAllProducts([...allProducts]);
            }
           
        }
           

            return res;
        }
        fetchProducts();
        
    }, [setProducts, addedProduct, products, setAllProducts,allProducts]);


    return (
      <Wrapper classname="wrapper">
        <h1>All Products</h1>
            <Cards>
                {!!allProducts.length && (
                     allProducts.map(product => (
                        <ProductCard name={product.name} description={product.Description} price={product.Price} discount={product.Discount} key={product.uuid}/>
                    )) 
                )}
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
margin: 0px auto;
padding:60px 20px 20px 250px;
    @media (max-width:767px) {
        padding: 15px;
    }

`;

const Cards = styled.div `
display: grid;
grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
grid-auto-rows: 320px;
justify-content: center;
max-width:100%;
margin-top: 50px;
`;

export default Products;