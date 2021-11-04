import React, {useContext, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ProductContext = React.createContext();

export function useProduct() {
    return useContext(ProductContext);
}

export function ProductProvider({children}) {
    const [products, setProducts] = useLocalStorage('Api Data', []);
    const [addedProduct, setAddedProduct] = useLocalStorage('Added Item', []);
    const [allProducts, setAllProducts] = useLocalStorage('All Products', []);
    const [editedItems, setEditedItems ] = useLocalStorage('Edited', false);
    const [isAdded, setIsAdded] = useState(false);
    
    const value = {
        products,
        setProducts,
        addedProduct,
        setAddedProduct,
        allProducts,
        setAllProducts,
        editedItems, 
        setEditedItems,
        isAdded,
        setIsAdded,
       
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

