import React, {Component} from 'react';
import {connect} from "react-redux";
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import  {select} from "../redux/action-creater";
import joint from 'jointjs';

class Hello extends Component {



        state={
            username:'',
            password:'',
        };

        componentDidMount() {
            var graph = new joint.dia.Graph;

            var paper = new joint.dia.Paper({
                el: document.getElementById('myholder'),
                model: graph,
                width: 600,
                height: 100,
                gridSize: 1
            });

            var rect = new joint.shapes.standard.Rectangle();
            rect.position(100, 30);
            rect.resize(100, 40);
            rect.attr({
                body: {
                    fill: 'blue'
                },
                label: {
                    text: 'Hello',
                    fill: 'white'
                }
            });
            rect.addTo(graph);

            var rect2 = rect.clone();
            rect2.translate(300, 0);
            rect2.attr('label/text', 'World!');
            rect2.addTo(graph);

            var link = new joint.shapes.standard.Link();
            link.source(rect);
            link.target(rect2);
            link.addTo(graph);


        }

    onSubmit =(event) =>{
        event.preventDefault();
        let name= this.state.username;
        let password = this.state.password;
        let log = false;
        if (name === 'asd' && password === '123'){
            log=true;
            this.props.sendProps(this.state.username,this.state.password,log);
        }
    }
    getUsername(event){
        this.setState({username: event.target.value});
    }
    getPassword(event){
        this.setState({password : event.target.value});
    }
    render() {
        return (
            <div>
                User Name:
                <Input onChange={(event) => {this.getUsername(event)}} placeholder='User Name' /><br/>
                Password:
                <Input onChange={(event) => {this.getPassword((event))}} type="password" placeholder='Password' /><br/>
                <Button onClick={this.onSubmit} content='Login' />
                <div id='myholder'></div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendProps : function (username, password, logincheck) {
            return dispatch(select(username,password,logincheck))
        }
    }
}
export default connect(null,mapDispatchToProps)(Hello);