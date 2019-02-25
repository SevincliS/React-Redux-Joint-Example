import React, {Component} from 'react';
import {connect} from "react-redux";
import Index from "./index";
import {Label} from 'semantic-ui-react';
import Login from "./login";
import Hataligiris from "./Hataligiris";
import Idinfo from "./Idinfo";

class Control extends Component {
    render() {
        let logincheck = this.props.logincheck;
        let index;
        if (logincheck ===true) {
            index=<Index/>
        }
        else if(logincheck===false) {
            index=<Hataligiris/>
        }
        else {
            index=<Login/>
        }
        return (
            <div>
                {index}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        logincheck: state.logincheck
    }
}
export default connect(mapStateToProps,null)(Control);