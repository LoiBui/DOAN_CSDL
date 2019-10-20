import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import {connect} from 'react-redux';
import {hideNotice} from '../../action/notice';

class notice extends Component {

    onConfirm = ()=>{
        this.props.hideNotice();
    }
    render() {
        let {isShow, type, msg} = this.props.notice;
        return (
            
            <SweetAlert
                show={isShow}
                type= {type}
                title= {msg}
                onConfirm = {this.onConfirm}
            />
        )
    }
}

const mapStateToProps = state=>{
    return {
        notice: state.notice
    }
} 

const mapDispatchToProps = dispatch=>{
    return {
        hideNotice:()=>dispatch(hideNotice())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(notice);
