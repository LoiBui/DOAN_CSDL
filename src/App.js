import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './component/layout/Header';
import Sidebar from './component/layout/Sidebar';
import Button from './container/user/index';
import Scroll from './component/layout/Scroll';
import Footer from './component/layout/Footer';
import configureStore from './redux/config'

const store = configureStore();
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header/>
              <Button/>
            </div>
            <Footer/>
          </div>
          <Scroll/>
        </div>
      </Provider>
    )
  }
}



export default App
