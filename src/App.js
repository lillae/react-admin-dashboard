import React from 'react';
import Products from './components/Products';
import { ProductProvider } from './contexts/ProductContext';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import ProductEdit from './components/ProductEdit';
import AddProducts from './components/AddProducts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>  
    <ProductProvider>
      <div className="App">
        <GlobalStyles/>
        <Header/>
        <Switch>
          <Route path='/' exact component={Products}/>
          <Route path='/edit' component={ProductEdit}/>
          <Route path='/add' component={AddProducts}/>
        </Switch>
      </div>
    </ProductProvider>
    </Router>
  );
}

export default App;
