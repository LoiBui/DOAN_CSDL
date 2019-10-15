import React, { Component } from 'react';
import Header from './component/layout/Header';
import Sidebar from './component/layout/Sidebar';
import Button from './container/user/index';

export class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header/>
            <Button/>
          </div>
        </div>
      </div>
    )
  }
}



export default App
