import {
  READ_SUBMISSIONS,
  GET_REMAINING_TIME,
  RESET_IS_ACCEPTED_FLAG,
  SUCCESS_LOGIN,
  FAILED_LOGIN,
  SUCCESS_SUBMIT,
  FAILED_SUBMIT,
  SWITCH_LOGIN_FORM_MODAL_STATUS,
  CLOSE_LOGIN_SNACKBAR
} from '../actions/submit'

const initialState = {
  submissions: {},
  status: [
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
  problems: {},
  remainingTime: '',
  isAccepted: false,
  latestJudgeId: '',
  isShowLoginFormModal: false,
  message: '',
  isOpenSnackBar: false,
  severity: '',
  user: {
    name: '未ログインユーザー'
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case READ_SUBMISSIONS:
      if (action.res.length > 0 && action.res[0].status === 4) {
        if (state.latestJudgeId !== action.res[0].judgeId) {
          return {
            ...state,
            submissions: action.res,
            isAccepted: true,
            latestJudgeId: action.res[0].judgeId
          }
        }
        return state
      } else {
        return { ...state, submissions: action.res }
      }

    case GET_REMAINING_TIME:
      return { ...state, remainingTime: action.remainingTime }

    case RESET_IS_ACCEPTED_FLAG:
      return { ...state, isAccepted: false }

    case SUCCESS_LOGIN:
      return { ...state, message: 'ログインに成功しました', user: action.res.data, isOpenSnackBar: true, severity: 'info', isShowLoginFormModal: false}
    
    case FAILED_LOGIN:
      return { ...state, message: 'ログインに失敗しました', severity: 'error', isOpenSnackBar: true}

    case SUCCESS_SUBMIT:
      return { ...state, message: '提出に成功しました', severity: 'info', isOpenSnackBar: true, isShowLoginFormModal: false}
    
    case FAILED_SUBMIT:
      return { ...state, message: '提出に失敗しました', severity: 'error', isOpenSnackBar: true}

    case SWITCH_LOGIN_FORM_MODAL_STATUS:
      return { ...state, isShowLoginFormModal: !action.isShowLoginFormModal }

    case CLOSE_LOGIN_SNACKBAR:
      return { ...state, isOpenSnackBar: false}

    default:
      return state
  }
}
