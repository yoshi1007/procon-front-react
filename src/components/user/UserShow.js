import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { renderValidateField } from '../utils/fields';
import { validate } from '../utils/validates';
import { getUser, updateUser } from '../../actions/user';

class UserShow extends Component{

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount(){
    const { id } = this.props.match.params
    if(id) this.props.getUser(id)
  }

  async onSubmit(values){
    const { id } = this.props.match.params
    await this.props.updateUser(values, id)
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

const mapStateToProps = (state) => ({
  initialValues: state.user.user
})

const mapDispatchToProps = { updateUser, getUser }

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({validate, form:'UpdateUserForm', enableReinitialize:true})(UserShow)
)
