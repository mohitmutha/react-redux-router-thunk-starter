
export const ADD_RANDOM = "ADD_RANDOM";

export function addRandom() {
    return async (dispatch, getState) => {  
      dispatch({type: ADD_RANDOM, data:{random: Math.random()}})
    };
}