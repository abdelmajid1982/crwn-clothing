import React from 'react'
import './App.css';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import HomePage from './Pages/homepage.composante';
import ShopPage from './Pages/shop/shop.component';
const HatsPage=()=>(
<div>
  <h1>Hats Page</h1>
</div>
)


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage } />
        <Route path="/Hats" component={ShopPage} />
      </Switch>  
  </BrowserRouter>


  );
}

export default App;
