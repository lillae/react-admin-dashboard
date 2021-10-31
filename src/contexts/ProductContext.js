import React, {useContext, useState} from 'react';


export const ProductContext = React.createContext();

export function useProduct() {
    return useContext(ProductContext);
}

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

