import React from 'react';
import Products from './components/products/Products';
import { ProductProvider } from './contexts/ProductContext';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/nav/Header';
import ProductEdit from './components/products/ProductEdit';
import AddProducts from './components/products/AddProducts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <ProductProvider>
        <div className='App'>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route path='/' exact component={Products} />
            <Route path='/edit' component={ProductEdit} />
            <Route path='/add' component={AddProducts} />
          </Switch>
        </div>
      </ProductProvider>
    </Router>
  );
}

export default App;
