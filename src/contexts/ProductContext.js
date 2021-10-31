import React, {useContext, useState} from 'react';


export const ProductContext = React.createContext();

export function useProduct() {
    return useContext(ProductContext);
}

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [sidebar, setSidebar] = useState(true);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
        console.log(sidebar);
    } ;

    return (
        <ProductContext.Provider value={{products, setProducts, sidebar, setSidebar, toggleSidebar}}>
            {children}
        </ProductContext.Provider>
    )
}

