import React          from 'react';
import ReactDOM       from 'react-dom';
import { Provider }   from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home           from './containers/Home.jsx'
import App            from './components/App.jsx'
import Signup         from './components/Signup.jsx'
import Login          from './components/Login.jsx'
import Favorites      from './components/Favorites.jsx'
import configureStore from './store/configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='signup' component={Signup} />
        <Route path='login' component={Login} />
        <Route path='favorites' component={Favorites} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
