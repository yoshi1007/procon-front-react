import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { renderField } from './utils/fields';

class Top extends Component{

  onSubmit(values){
    console.log(values)
  }

  render(){
    const {handleSubmit} = this.props
    return(
      <div>
        <Link to={'/users'}>ユーザー一覧</Link>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="sample" placeholder="sample" type="text" component={renderField} />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}


export default connect(null, null)(
  reduxForm({form:"topForm"})(Top)
)
