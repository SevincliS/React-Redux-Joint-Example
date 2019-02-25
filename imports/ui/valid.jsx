import React, {Component} from 'react';
import {connect} from "react-redux";
import Info from "./Info";
import Hello from "./Hello";

class Valid extends Component {
    render() {
        let valid = this.props.logd;
        let view;
        if (valid){
            view = <Info/>
        }
        else {
            view=<Hello/>
        }
        return (
            <div>
                {view}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        logd : state.check
    }
}
export default connect(mapStateToProps,null) (Valid);