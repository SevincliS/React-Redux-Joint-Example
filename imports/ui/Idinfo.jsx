import React, {Component} from 'react';
import {connect} from "react-redux";

class Idinfo extends Component {
    render() {
        return (
            <div>
                {this.props.id}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        id:state.id
    }
};
export default connect(mapStateToProps,null)(Idinfo);