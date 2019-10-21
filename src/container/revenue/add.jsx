import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';

export class add extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            autoForceUpdate: this,
            messages: {
                required: 'Trường này không được phép bỏ trống',
                numeric: 'Bạn không thể nhập kí tự trong trường này.',
            },
        });
    }

    state = {
        isShow: this.props.isShow,
        imageCount: 1,
        date: '',
        revenue: '',
        note: ''
    }

    onChange = event=>{
        let {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    increImgCount = ()=>{
        let {imageCount} = this.state
        this.setState({
            imageCount: imageCount+=1
        });
        this.refs.scrollImage.scrollLeft = 10000;
    }


    onSubmit = event=> {
        event.preventDefault();
        if (this.validator.allValid()) {
          alert('You submitted the form and stuff!');
        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          // you can use the autoForceUpdate option to do this automatically`
          this.forceUpdate();
        }
    }
    renderMain = () => {
        if (this.state.isShow)
            return (
                <form method="POST" onSubmit={this.onSubmit}>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Thêm doanh thu</h6>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input onChange={this.onChange} name="date" type="date" className="form-control form-control-user"/>
                                {this.validator.message('date', this.state.date, 'required')}
                            </div>
                            <div className="form-group">
                                <input onChange={this.onChange} name="revenue" type="text" className="form-control form-control-user" placeholder="Doanh thu hôm nay: vd:1000000" />
                                {this.validator.message('revenue', this.state.revenue, 'required|numeric')}
                            </div>
                            <div className="form-group">
                                <textarea onChange={this.onChange} name="note"  rows="4" className="form-control form-control-user" placeholder="Ghi chú" >
                                </textarea>
                                {this.validator.message('note', this.state.note, 'required')}
                            </div>
                            <div id="scrollImage" ref="scrollImage" className="d-flex" style={{'overflowY': 'auto', marginBottom: 10}}>
                                {this.renderImage()}
                                <div className="form-group" style={{marginRight: '10px'}}>
                                    <label>
                                        <div className="customeLabelUploadFile customAddImg">
                                            <label className="customLabel" onClick={this.increImgCount}>+</label>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div style={{float: 'right'}}>
                                <button type="reset" className="btn btn-info"><i className="fas fa-sync-alt"></i> Reset</button>
                                {'\u00A0'}{'\u00A0'}
                                <button type="submit" onClick={this.onSubmit} className="btn btn-primary"><i className="fa fa-plus"></i> Thêm</button>
                            </div>
                        </div>
                    </div>
                </form>
            );
        return '';
    }

    renderImage = ()=>{
        let xhtml = [];
        for(let i = 0; i < this.state.imageCount; i++){
            let el = (
                <div className="form-group" key={i} style={{marginRight: '10px'}}>
                    <label htmlFor={`photo${i}`}>
                        <div className="customeLabelUploadFile">
                            <label>+</label>
                        </div>
                    </label>
                    <input style={{display: 'none'}} type="file" name="photo" id={`photo${i}`}/>
                </div>
            );
            
            xhtml.push(el);
        }
        return xhtml;
    }
    render() {
        return (
            <div className="container-fluid">
                { this.renderMain() }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(add)
