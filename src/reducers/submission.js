import { READ_SUBMISSIONS, GET_REMAINING_TIME, RESET_IS_ACCEPTED_FLAG } from '../actions/submission';

const initialState = {
  submissions:{},
  status:[
    'COMPILE ERROR',
    'WRONG ANSWER',
    'TIME LIMIT',
    'MEMORY LIMIT',
    'ACCEPTED',
    'WAITING',
    'OUTPUT LIMIT',
    'RUNTIME ERROR',
    'PRESENTATION ERROR',
    'RUNNING'
  ],
  problems: {
    'ICPC Score Totalizer Software':'問題1',
    'Millennium':'問題2',
    'Next Mayor':'問題3',
    'Tax Rate Changed':'問題4',
    'Equal Total Scores':'問題5'
  },
  remainingTime: '',
  isAccepted: false,
  latestJudgeId: ''
}

export default (state=initialState, action) => {
  switch(action.type){
    case READ_SUBMISSIONS :
      if(action.res.length > 0 && action.res[0].status===4){
        if(state.latestJudgeId!==action.res[0].judgeId){
          return { ...state, submissions: action.res, isAccepted: true, latestJudgeId: action.res[0].judgeId}
        }
        return state
      } else {
        return { ...state, submissions: action.res }
      }

    case GET_REMAINING_TIME :
      return { ...state, remainingTime: action.remainingTime}

    case RESET_IS_ACCEPTED_FLAG :
      return { ...state, isAccepted: false}

    default:
      return state
  }
}
