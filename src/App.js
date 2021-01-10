import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ShopPage from './pages/collection-page/shop.component';
import HomePage from './pages/home-page/home-page.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
