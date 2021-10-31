import React from 'react';
import Products from './components/Products';
import { ProductProvider } from './contexts/ProductContext';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Products/>
      </div>
    </ProductProvider>
  );
}

export default App;
