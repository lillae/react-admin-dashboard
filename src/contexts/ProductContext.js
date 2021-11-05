import React, {useContext, useState} from 'react';

export const ProductContext = React.createContext();

export function useProduct() {
    return useContext(ProductContext);
}

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [addedProduct, setAddedProduct] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [editedItems, setEditedItems ] = useState(false);

    
    const value = {
        products,
        setProducts,
        addedProduct,
        setAddedProduct,
        allProducts,
        setAllProducts,
        editedItems, 
        setEditedItems,
       
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

