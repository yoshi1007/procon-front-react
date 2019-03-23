import _ from 'lodash';
import { GET_USERS, GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER, OPEN_USER_DELETE_DIALOG, CLOSE_USER_DELETE_DIALOG } from '../actions/user';

const initialState = {
  users:{},
  user: {},
  id:'',
  isOpenUserDeleteDialog: false
}

export default(state=initialState, action)=>{
  switch(action.type){
    case GET_USERS:
      return { ...state, users: _.mapKeys(action.response.data, 'id') }

    case GET_USER:
    case UPDATE_USER:
      return { ...state, user:action.response.data}

    case CREATE_USER:
      return { ...state }

    case DELETE_USER:
      delete state.users[action.id]
      return { ...state, isOpenUserDeleteDialog: false }

    case OPEN_USER_DELETE_DIALOG:
      return { ...state, isOpenUserDeleteDialog: true, id: action.id}

    case CLOSE_USER_DELETE_DIALOG:
      return { ...state, isOpenUserDeleteDialog: false}

    default:
      return state
  }
}
