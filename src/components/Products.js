import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { productsURL } from '../api';
import ProductCard from './ProductCard';
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
    const {products, setProducts} = useContext(ProductContext);

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
        <div>
            {products.map((product) => (
                <ProductCard key={product.uuid}/>
            ))}
        </div>
    )
}

export default Products;