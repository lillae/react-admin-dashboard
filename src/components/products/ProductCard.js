import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import styled from 'styled-components';

const ProductCard = ({ name, description, price, discount }) => {
  return (
    <StyledCard interactive={true} elevation={Elevation.TWO}>
      <h3>{name}</h3>
      <p>{description}...</p>
      <span>{price}</span>
      <h6>Discount: {discount}</h6>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  background: #ffffff14;
  color: white;
  margin: 0px auto;
  padding: 2rem 1rem;
  height: 300px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  cursor: pointer;
  & > * {
    margin-bottom: 20px;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 900;
  }
  p {
    padding: 0px 15px;
    color: #ffffffe0;
  }
  span {
    font-size: 2.5rem;
    font-weight: 600;
  }

  h6 {
    font-size: 1.2rem;
    background: #66627a;
    padding: 5px 10px;
  }
`;

export default ProductCard;
