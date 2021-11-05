import React, {useContext, useState, useEffect} from 'react';

export const ProductContext = React.createContext();

export function useProduct() {
    return useContext(ProductContext);
}

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [addedProduct, setAddedProduct] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [editedItems, setEditedItems ] = useState(false);
    const [isAdded, setIsAdded ] = useState(false);


    useEffect(() => {
       if(allProducts.length > 0) {
        localStorage.setItem('All Products', JSON.stringify(allProducts))
        localStorage.setItem('Edited Products', JSON.stringify(editedItems)) 
       }
       
    }, [allProducts, editedItems]); 

    
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
        setIsAdded
       
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

