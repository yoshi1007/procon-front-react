import { combineReducers } from 'redux';
import { reducer as form  } from 'redux-form';

import submission from './submission';

export default combineReducers({form: form, submission})
