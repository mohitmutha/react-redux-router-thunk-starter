import React from 'react';
import {connect} from 'react-redux';

export default class ListItem extends React.Component {
    render(){
        return <div>{this.props.title}</div>
    }
}