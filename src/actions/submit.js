import _ from 'lodash';

import { URL, myHttpClient, participants, endDate } from './index';
export const READ_SUBMISSIONS = 'READ_SUBMISSIONS'
export const GET_REMAINING_TIME = 'GET_REMAINING_TIME'
export const RESET_IS_ACCEPTED_FLAG = 'RESET_ISCORRECT_FLAG'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const SUCCESS_SUBMIT = 'SUCCESS_SUBMIT';
export const SWITCH_LOGIN_FORM_MODAL_STATUS = 'SWITCH_LOGIN_FORM_MODAL_STATUS'

export const getSubmissions = () => async dispatch => {
  const res = await myHttpClient.get(`${URL}/submission_records/recent`)
  console.log(res)
  const keyArray = Object.keys(participants)
  const response = _.filter(res.data, submission =>{
    return keyArray.indexOf(submission.userId) !== -1
  })
  dispatch({type:READ_SUBMISSIONS, res: response})
}

export const getRemainingTime = () => async dispatch => {
  let remainingTime = new Date(endDate).getTime() - new Date().getTime()
  const hour = Math.floor(remainingTime / 3600000)
  let min = Math.floor((remainingTime - hour * 3600000)/60000)
  min = `0${min}`.slice(-2)
  let sec = Math.round((remainingTime - hour * 3600000 - min * 60000)/1000)
  sec = `0${sec}`.slice(-2)
  remainingTime = `${hour} : ${min} : ${sec}`
  dispatch({type:GET_REMAINING_TIME, remainingTime})
}

export const resetFlag = () => dispatch => {
  dispatch({type:RESET_IS_ACCEPTED_FLAG})
}


// ログインAPIをコールする
export const callLoginApi = (session_form_values) => async dispatch => {
  await myHttpClient.post(
    `{URL}/session`,session_form_values
  ).then((res)=>{
    console.log(res)
    dispatch({ type:SUCCESS_LOGIN, res })
  }).catch((error)=>{
    console.log(error)
  })
}

// 回答提出APIをコールする
export const callSubmitApi = (submit_form_values) => async dispatch => {
  await myHttpClient.post(
    `{URL}/submit`,submit_form_values
  ).then((res)=>{
    console.log(res)
    dispatch({ type:SUCCESS_SUBMIT, res })
  }).catch((error)=>{
    console.log(error.config)
  })
}

// ログインフォームモーダルを表示・非表示する
export const switchLoginFormModalStatus = (isShowSessionFormModal) => async dispatch => {
  dispatch({ type: SWITCH_LOGIN_FORM_MODAL_STATUS, isShowSessionFormModal })
}