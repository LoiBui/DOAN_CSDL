import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

export const CustomLinkSignle = ({label, to, exact}) => {
    return (
        <Route path={to} exact={exact} children={({match})=>{
            let active = match ? 'nav-item active':'nav-item';
            return (
                <li className={active}>
                    <NavLink className="nav-link" to={to}>
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>{label}</span>
                    </NavLink>
                </li>
            )
        }}/>
    )
}

export const CustomLinkMultiLevel = ({labelParent, to, exact, listChildren}) => {
    return (
        <Route path={to} exact={exact} children={({match})=>{
            let active = match ? 'nav-item active':'nav-item';
            
            return (
                // <li className={active}>
                //     <NavLink className="nav-link" to={to}>
                //         <i className="fas fa-fw fa-tachometer-alt" />
                //         <span>{label}</span>
                //     </NavLink>
                // </li>

                <li className={active}>
                    <a className="nav-link collapsed" href="https://www.facebook.com/" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench" />
                        <span>{labelParent}</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Revenue:</h6>
                            <NavLink exact className="collapse-item" to="/doanhso">Danh Sách</NavLink>
                            <NavLink exact className="collapse-item" to="/doanhso/them">Thêm Cho Ngày</NavLink>
                        </div>
                    </div>
                </li>
            )
        }}/>
    )
}
