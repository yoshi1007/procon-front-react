import _ from 'lodash';

import { URL, myHttpClient, participantIds, startDate } from './index';

export const GET_RANKING = 'GET_RANKING'

export const getRanking = () => async dispatch => {
  const start = new Date(startDate)
  let rankingArray = []
  for(let i in participantIds){
    const res = await myHttpClient.get(`${URL}/solutions/users/${participantIds[i]}`)
    const result = _.filter(res.data, record => {
      return record.submissionDate > start.getTime()
    })
    rankingArray.unshift({id: participantIds[i], solutions: result.length})
  }
  rankingArray = rankingArray.sort((a, b) => {
    let x = a['solutions']
    let y = b['solutions']
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
