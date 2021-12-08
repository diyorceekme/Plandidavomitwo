import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getInitialData, isUserLoggedIn } from './actions'
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getAllCategory())
    // dispatch(getInitialData())
  }, []);

  return (
    <div className="App">

      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/category" component={Category} />

        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>


    </div>
  );
}

export default App;


