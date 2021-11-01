import React, {useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ProductContext = React.createContext();

export function useProduct() {
    return useContext(ProductContext);
}

export function ProductProvider({children}) {
    const [products, setProducts] = useLocalStorage('Api Data', []);
    const [addedProduct, setAddedProduct] = useLocalStorage('Added Item', []);
    const [allProducts, setAllProducts] = useLocalStorage('All Products', []);
    
    const value = {
        products,
        setProducts,
        addedProduct,
        setAddedProduct,
        allProducts,
        setAllProducts,
       
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

