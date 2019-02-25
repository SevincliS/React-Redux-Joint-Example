import React, {Component} from 'react';
import {connect} from "react-redux";

class Info extends Component {
    render() {
        return (
            <div>
                <p>Hoşgeldin {this.props.username} !</p>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        username : state.username
    }
};
export default connect(mapStateToProps,null)(Info);