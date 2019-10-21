import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {CustomLinkSignle, CustomLinkMultiLevel} from '../../commons/CustomLink';


export class Sidebar extends Component {
    
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <CustomLinkSignle label="Dashboard" to="/dashboard" exact={true}/>
                
                
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Interface
                </div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="https://www.facebook.com/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog" />
                        <span>Components</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>
                </li>
                
                <CustomLinkMultiLevel to="/doanhso" labelParent = "Doanh Số"/>
                
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Addons
                </div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="https://www.facebook.com/" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder" />
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <a className="collapse-item" href="login.html">Login</a>
                            <a className="collapse-item" href="register.html">Register</a>
                            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                            <div className="collapse-divider" />
                            <h6 className="collapse-header">Other Pages:</h6>
                            <a className="collapse-item" href="404.html">404 Page</a>
                            <a className="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Charts</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="tables.html">
                        <i className="fas fa-fw fa-table" />
                        <span>Tables</span></a>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
            </ul>
        )
    }
}



export default Sidebar
