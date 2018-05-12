import React from 'react';
import {connect} from 'react-redux';

export default class MyButton extends React.Component {
    render(){
        return <button onClick={this.props.onClick}>{this.props.title}</button>
    }
}