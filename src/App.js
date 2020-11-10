import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ShopPage from './pages/collection-page/shop.component';
import HomePage from './pages/home-page/home-page.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
