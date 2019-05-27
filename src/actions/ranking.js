import _ from 'lodash';

import { URL, myHttpClient, participantIds, startDate } from './index';

export const GET_RANKING = 'GET_RANKING'

export const getRanking = () => async dispatch => {
  const start = new Date(startDate)
  let rankingArray = []
  // participantIds.map(async(id) => {
  //   const res = myHttpClient.get(`${URL}/solutions/users/${id}`)
  //   console.log(res)
  //   const result = _.filter(res.data, record => {
  //     console.log(record.submissionDate > start.getTime())
  //     return record.submissionDate > start.getTime()
  //   })
  //   rankingArray.unshift({id: id, solutions: result.length})
  // })
  console.log(participantIds)
  for(let i in participantIds){
    console.log(participantIds[i])
    const res = await myHttpClient.get(`${URL}/solutions/users/${participantIds[i]}`)
    console.log(res)
    const result = _.filter(res.data, record => {
      console.log(record.submissionDate > start.getTime())
      return record.submissionDate > start.getTime()
    })
    rankingArray.unshift({id: participantIds[i], solutions: result.length})
  }
  console.log(rankingArray)
  rankingArray = rankingArray.sort((a, b) => {
    let x = a['solutions']
    let y = b['solutions']
    if ( x > y ) { return -1; }
    if ( x < y ) { return  1; }
    return 0
  })
  console.log(rankingArray)
  let count, tmp
  let ranking = []
  rankingArray.forEach((item, index) => {
    if ( item.solutions !== tmp ) {
      count = index + 1;
      tmp = item.solutions;
    }
    ranking.push({id: item.id, solutions: item.solutions, rank: count})
  })
  console.log(ranking)
  dispatch({type:GET_RANKING, ranking})
}
