import { GET_RANKING, CLOSE_SNACKBAR } from '../actions/ranking'

const initialState = {
  ranking: [],
  isOpenSnackBar: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_RANKING:
      return { ...state, ranking: action.ranking, isOpenSnackBar: true}
    case CLOSE_SNACKBAR:
      return { ...state, isOpenSnackBar: false }
    default:
      return state
  }
}
