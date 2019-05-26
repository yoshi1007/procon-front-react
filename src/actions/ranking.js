import _ from 'lodash';

import { URL, myHttpClient, participantIds, startDate } from './index';

export const GET_RANKING = 'GET_RANKING'

export const getRanking = () => async dispatch => {
  const start = new Date(startDate)
  let rankingArray = []
  _.map(participantIds, id => {
    const res = myHttpClient.get(`${URL}/solutions/users/${id}`)
    const result = _.filter(res, record => {
      return new Date(record.submissionDate) > start
    })
    rankingArray.push({id: id, solutions: result.length})
  })
  rankingArray = rankingArray.sort((a, b) => {
    let x = a[ 'solutions' ]
    let y = b[ 'solutions' ]
    if ( x > y ) { return -1; }
    if ( x < y ) { return  1; }
    return 0
  })
  let count, tmp
  let ranking = []
  rankingArray.forEach((item, index) => {
    if ( item.solutions !== tmp ) {
      count = index + 1;
      tmp = item.solutions;
    }
    ranking.push({id: item.id, solutions: item.solutions, rank: count})
  })
  dispatch({type:GET_RANKING, ranking})
}
