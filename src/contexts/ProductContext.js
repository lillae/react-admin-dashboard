import React, { useContext, useState, useEffect } from 'react';

export const ProductContext = React.createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [addedProduct, setAddedProduct] = useState([]);
  const [allProducts, setAllProducts] = useState(() => {
    const saved = localStorage.getItem('All Products');
    const inititialValue = JSON.parse(saved);
    return inititialValue || [];
  });
  const [editedItems, setEditedItems] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (allProducts.length > 0) {
      localStorage.setItem('All Products', JSON.stringify(allProducts));
    }
    if (editedItems === true) {
      localStorage.setItem('Edited Products', JSON.stringify(editedItems));
    }

    return allProducts;
  }, [allProducts, editedItems]);

  const value = {
    addedProduct,
    setAddedProduct,
    allProducts,
    setAllProducts,
    editedItems,
    setEditedItems,
    isAdded,
    setIsAdded,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
