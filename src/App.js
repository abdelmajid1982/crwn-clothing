import React from 'react'
import './App.css';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import HomePage from './Pages/homepage.composante';
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
        <Route path="/Hats" component={HatsPage} />
      </Switch>  
  </BrowserRouter>


  );
}

export default App;
