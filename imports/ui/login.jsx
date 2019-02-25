import React, {Component} from 'react';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {getLoginInfo} from "../redux/action-creater";

class Login extends Component {

    state={
        username: '',
        password: ''
    };
    getUname(event){
        this.setState({username: event.target.value});
    };

    getPassword(event){
        this.setState({password: event.target.value});
    };

    submit=(event) =>{
        event.preventDefault();
        let uname = this.state.username;
        let password = this.state.password;
        let logincheck = false;
        if (uname === 'asd' && password === '123') {
            logincheck = true;
            this.props.sendProps(uname,password,logincheck);
        }
        else{
            this.props.sendProps(uname,password,logincheck);
        }
    };


    render() {
        return (
            <div>
                <Input icon='users' onChange={(event) => {this.getUname(event)}} iconPosition='left' placeholder='Username' />
                <Input icon='users' onChange={(event) => {this.getPassword(event)}} iconPosition='left' type='password' placeholder='Password' />
                <Button onClick={(event) =>{this.submit(event)}} content='Click Here' />
            </div>
        );
    }
}
    const mapDispatchToProps = dispatch =>{
        return{
            sendProps: function (username, password, logincheck) {
                return dispatch(getLoginInfo(username,password,logincheck));
            }
        }
    }


export default connect(null,mapDispatchToProps)(Login);