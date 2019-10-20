import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

class question extends Component {

    render() {
        let {isShow, message} = this.props;
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
                onConfirm={this.props.onConfirm}
                onCancel={this.props.onCancel}
            />
        )
    }
}



export default question
