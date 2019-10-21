import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './component/layout/Header';
import Sidebar from './component/layout/Sidebar';
import Button from './container/revenue';
import Scroll from './component/layout/Scroll';
import Footer from './component/layout/Footer';
import configureStore from './redux/config';
import Loading from './component/loading';
import Notice from './component/notice/notice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Dashboard from './container/dashboard';
import AddRevenue from './container/revenue/add';


const store = configureStore();
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="wrapper">
            <Loading/>
            <Sidebar/>
            <Notice/>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Header/>
                <Switch>
                  <Route exact path="/doanhso">
                    <Button />
                  </Route>
                  <Route exact path="/doanhso/them">
                    <AddRevenue isShow={true}/>
                  </Route>
                  <Route exact path="/dashboard">
                    <Dashboard />
                  </Route>
                </Switch>
              </div>
              <Footer/>
            </div>
            <Scroll/>
          </div>

          

        </Router>
      </Provider>
    )
  }
}



export default App
