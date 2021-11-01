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
    const isMobile = window.innerWidth < 1200;
    const [sidebar, setSidebar] = useState(true);

    
    const toggleSidebar = () => {
        setSidebar(!sidebar);
        console.log(sidebar);
    } ;

    const value = {
        products,
        setProducts,
        sidebar,
        setSidebar,
        toggleSidebar,
        addedProduct,
        setAddedProduct,
        allProducts,
        setAllProducts,
        isMobile
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

