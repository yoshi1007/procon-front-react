import { GET_RANKING } from '../actions/ranking'

const initialState = {
  ranking: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_RANKING:
      return { ...state, ranking: action.ranking}
    default:
      return state
  }
}
