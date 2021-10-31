import React from 'react';
import Products from './components/Products';
import { ProductProvider } from './contexts/ProductContext';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <GlobalStyles/>
        <Products/>
      </div>
    </ProductProvider>
  );
}

export default App;
