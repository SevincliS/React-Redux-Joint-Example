import React, {Component} from 'react';
import {connect} from "react-redux";
import joint from 'jointjs';
import {getElementId, select} from "../redux/action-creater";
import Idinfo from "./Idinfo";

class Index extends Component {


    componentDidMount() {

        let graph = new joint.dia.Graph;

        let paper = new joint.dia.Paper({
            el: document.getElementById('myholder'),
            model: graph,
            width: 1000,
            height: 600,
            gridSize: 1,
            drawGrid: true,
            background:{
                color: 'white'
            }
        });

        let rect = new joint.shapes.standard.Rectangle();
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

        let rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.addTo(graph);

        let link = new joint.shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(graph);

        let self=this;
        paper.on('element:pointerclick',function(elementView){
            let currentelementid = elementView.model.id;
            self.props.sendProps(currentelementid);


        });

    }
    render() {
        return (
            <div>
            <div id={'myholder'}>

            </div>
                <Idinfo/>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendProps : function (id) {
            return (dispatch(getElementId(id)))
        }
    }
}

const mapStateToProps = (state)=>{
    return{
        username: state.username
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);