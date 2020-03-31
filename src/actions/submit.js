import _ from 'lodash';

import { URL, myHttpClient } from './index';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const SUCCESS_SUBMIT = 'SUCCESS_SUBMIT';
export const SWITCH_LOGIN_FORM_MODAL_STATUS = 'SWITCH_LOGIN_FORM_MODAL_STATUS'

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
export const SwitchLoginFormModalStatus = () => async dispatch => {
  dispatch({ type: SWITCH_LOGIN_FORM_MODAL_STATUS })
}