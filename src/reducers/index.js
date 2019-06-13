import { combineReducers } from 'redux';
import { reducer as form  } from 'redux-form';

import submission from './submission';
import ranking from './ranking';
import common from './common';

export default combineReducers({form: form, submission, ranking, common})
