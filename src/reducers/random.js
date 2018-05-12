import { ADD_RANDOM } from "../actions/random";

const random = (state = {current:0, history:[]}, action) => {
      switch(action.type){
        case ADD_RANDOM:
          let history = state.history;
          history.push(action.data.random)
          state = Object.assign({}, state, {current:action.data.random, history: history})
          return state;
        default:
          return state;
      }
      return state
      
  }


export default random