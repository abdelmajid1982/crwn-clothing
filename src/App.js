import React from 'react'
import './App.css';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import HomePage from './Pages/homepage.composante';
import ShopPage from './Pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './Pages/sing-in-sing-up/sing-in-sing-up.component';
import {auth} from './firebase/firebase.util';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
      this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage } />
          <Route path="/shop" component={ShopPage} />
          <Route path="/SignIn" component={SignInAndSignUpPage} />
        </Switch>  
    </BrowserRouter>
  
  
    );
  }
  
}

export default App;
