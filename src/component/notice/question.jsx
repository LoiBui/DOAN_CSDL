import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import {connect} from 'react-redux';
import {hideMessageQuestion} from '../../action/notice/question';

class question extends Component {

    deleteFile = ()=>{
        this.props.disable(true);
    }
    onCancel=()=>{
        this.props.disable(false);
    }
    render() {
        let {isShow, message} = this.props.question;
        return (
            <SweetAlert
                show={isShow}
                warning
                showCancel
                confirmBtnText="Xác Nhận"
                cancelBtnText="Hủy Bỏ"
                confirmBtnBsStyle="danger"
                cancelBtnBsStyle="info"
                title={message}
                onConfirm={this.deleteFile}
                onCancel={this.onCancel}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    question: state.question
})

const mapDispatchToProps = dispatch=>{
    return {
        disable: value=>{
            dispatch(hideMessageQuestion(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(question)
