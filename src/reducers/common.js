import { participants } from '../actions';

const initialState = {
  users: participants
}

export default (state = initialState, action) => {
  switch(action.type){
    default:
      return state
  }
}
