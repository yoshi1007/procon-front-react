import { combineReducers } from 'redux';
import { reducer as form  } from 'redux-form';

import submission from './submission';
import ranking from './ranking';

export default combineReducers({form: form, submission, ranking})
