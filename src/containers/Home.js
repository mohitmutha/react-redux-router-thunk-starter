import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItem from '../components/ListItem';
import MyButton from '../components/Button'
import RandomHistory from '../components/RandomHistory'
import * as RandomActions from '../actions/random'

class Home extends React.Component {
    render(){
        return <div>
                <div style={{fontWeight:'bold'}}>Current: {this.props.random}</div>
                <MyButton onClick={this.handleClick} title={"Create a new random"}></MyButton>
                
                <h3>History</h3>
                <RandomHistory items={this.props.randomHistory}></RandomHistory>
            </div>
    }

    handleClick = () => {
        this.props.randomActions.addRandom();
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  console.log(state)
return {
  random: state.random.current,
  randomHistory: state.random.history
}
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
return {
    randomActions: bindActionCreators(RandomActions, dispatch),
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);