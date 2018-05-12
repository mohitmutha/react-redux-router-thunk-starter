import React from 'react';
import {connect} from 'react-redux';
import ListItem from './ListItem';

export default class RandomHistory extends React.Component {
    render(){
        return <div>
          {this.props.items.map(
            (item) => <ListItem title={item}></ListItem>
          )}
        </div>
    }
}