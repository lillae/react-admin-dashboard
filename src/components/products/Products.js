import React, { useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { useProduct } from '../../contexts/ProductContext';
import styled from 'styled-components';
import { productsURL } from '../../api';

const Products = () => {
  const { setAllProducts, allProducts, editedItems } = useProduct();

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios
        .get(productsURL())
        .catch((err) => console.log(err));

      if (res) {
        setAllProducts(res.data);
        if (allProducts.length === 0 && editedItems)
          setAllProducts(allProducts);
        if (allProducts.length > 0) setAllProducts([...allProducts]);
      }
      return res;
    }

    fetchProducts();
  }, []);

  return (
    <Wrapper classname='wrapper'>
      <h1>All Products</h1>
      <Cards>
        {!!allProducts.length &&
          allProducts.map((product) => (
            <ProductCard
              name={product.name}
              description={product.Description}
              price={product.Price}
              discount={product.Discount}
              key={product.uuid}
            />
          ))}
      </Cards>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1600px;
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  padding: 60px 20px 20px 250px;
  background: transparent;
  @media (max-width: 767px) {
    padding: 15px 15px 40px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-auto-rows: 320px;
  gap: 20px;
  justify-content: center;
  max-width: 950px;
  width: 100%;
  margin-top: 50px;
`;

export default Products;
