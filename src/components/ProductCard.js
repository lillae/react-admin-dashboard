import React from 'react';
import {Card, Elevation} from '@blueprintjs/core';
import styled from 'styled-components';

const ProductCard = ({name, description, price, discount}) => {

    return (
        <StyledCard interactive={true} elevation={Elevation.TWO}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price<br /><span> {price}</span></p>
            <h6>{discount} discount now!</h6>
        </StyledCard>
    );
}


const StyledCard = styled(Card) ` 
background: #47477467;
color: white;
margin: 0px 10px;
padding: 2rem 1rem;
height: 300px;
max-width:400px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align:center;
cursor:pointer;
& > * {
  margin-bottom: 20px;
}
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  span {
    font-size: 2.5rem;
  }

  h6 {
    font-size: 1.2rem;
  }

`;

export default ProductCard;
