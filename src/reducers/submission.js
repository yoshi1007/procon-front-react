import { READ_SUBMISSIONS, GET_REMAINING_TIME, RESET_IS_ACCEPTED_FLAG } from '../actions/submission';
import _ from 'lodash';

const initialState = {
  submissions:{},
  status:[
    'COMPILEERROR',
    'WRONGANSWER',
    'TIMELIMIT',
    'MEMORYLIMIT',
    'ACCEPTED',
    'WAITING',
    'OUTPUTLIMIT',
    'RUNTIMEERROR',
    'PRESENTATIONERROR',
    'RUNNING'
  ],
  remainingTime: '',
  isAccepted: false,
  latestJudgeId: ''
}

export default (state=initialState, action) => {
  switch(action.type){
    case READ_SUBMISSIONS :
      if(action.res.length > 0){
        if(action.res[0].status===4){
          if(state.latestJudgeId!==action.res[0].judgeId){
            return { ...state, submissions: action.res, isAccepted: true, latestJudgeId: action.res[0].judgeId}
          }
          return state
        } else {
          return { ...state, submissions: action.res }
        }
      }
      return state

    case GET_REMAINING_TIME :
      return { ...state, remainingTime: action.remainingTime}

    case RESET_IS_ACCEPTED_FLAG :
      return { ...state, isAccepted: false}

    default:
      return state
  }
}
