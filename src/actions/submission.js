import _ from 'lodash';

import { URL, myHttpClient, participantIds, endDate } from './index';
export const READ_SUBMISSIONS = 'READ_SUBMISSIONS'
export const GET_REMAINING_TIME = 'GET_REMAINING_TIME'
export const RESET_IS_ACCEPTED_FLAG = 'RESET_ISCORRECT_FLAG'

export const getSubmissions = () => async dispatch => {
  const res = await myHttpClient.get(`${URL}/submission_records/recent`)
  console.log(res)
  const response = _.filter(res.data, (submission)=>{
    return participantIds.indexOf(submission.userId) !== -1
  })
  dispatch({type:READ_SUBMISSIONS, res: response})
}

export const getRemainingTime = () => async dispatch => {
  let remainingTime = new Date(endDate).getTime() - new Date().getTime()
  const hour = Math.floor(remainingTime / 3600000)
  const min = Math.floor((remainingTime - hour * 3600000)/60000)
  const sec = Math.round((remainingTime - hour * 3600000 - min * 60000)/1000)
  remainingTime = `${hour}時間 ${min}分 ${sec}秒`
  dispatch({type:GET_REMAINING_TIME, remainingTime})
}

export const resetFlag = () => async dispatch => {
  dispatch({type:RESET_IS_ACCEPTED_FLAG})
}
