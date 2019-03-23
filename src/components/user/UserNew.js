import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { renderValidateField } from '../utils/fields';
import { validate } from '../utils/validates';
import { createUser } from '../../actions/user';

class UserNew extends Component{

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit(values){
    await this.props.createUser(values)
    this.props.history.push('/users')
  }

  render(){
    const { handleSubmit, pristine, submitting, invalid } = this.props
    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name='name' label='名前' type="text" component={renderValidateField} />
          <Field name='mailAddress' label='メールアドレス' type="text" component={renderValidateField} />
          <input type="submit" value="登録する" disabled={ pristine || submitting || invalid } />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = { createUser }

export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form:'NewUserForm'})(UserNew)
)
