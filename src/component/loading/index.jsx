import React, { Component } from 'react';
import {connect} from 'react-redux';


const loadingParent = {
    position: 'fixed',
    width: '100%',
    height: '100em',
    background: '#80808052',
    zIndex: '999',
}

const loadingChildren = {
    'width': '100%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': '100vh',
}
export class index extends Component {
    
    render() {
        let {isLoading} = this.props;
        if (isLoading.isLoading)
            return (
                
                <div style={loadingParent}>
                    <div style={loadingChildren}>
                        <svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-ripple" style={{ background: 'none' }}>
                            <circle cx={50} cy={50} r="16.6707" fill="none" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-width="{{config.width}}" stroke="#ff727d" strokeWidth={2}>
                                <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur={2} keySplines="0 0.2 0.8 1" begin="-1s" repeatCount="indefinite" />
                                <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur={2} keySplines="0.2 0 0.8 1" begin="-1s" repeatCount="indefinite" />
                            </circle>
                            <circle cx={50} cy={50} r="35.338" fill="none" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-width="{{config.width}}" stroke="#ffd391" strokeWidth={2}>
                                <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur={2} keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite" />
                                <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur={2} keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </div>

                </div>
            );
            return '';
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.loading
    }
}

export default connect(mapStateToProps, null)(index);
