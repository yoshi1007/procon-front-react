import { combineReducers } from 'redux';
import { reducer as form  } from 'redux-form';

import submit from './submit';
import ranking from './ranking';
import common from './common';

export default combineReducers({form: form, submit, ranking, common})
