import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import { callLoginApi, switchLoginFormModalStatus } from '../../actions/submit';
import { renderValidateField } from '../utils/fields';
import { validate } from '../utils/validates';

class LoginFormModal extends Component{

	constructor(props){
		super(props);
		this.onSubmitLoginForm = this.onSubmitLoginForm.bind(this)
	}
	
	async onSubmitLoginForm(values){
		await this.props.callLoginApi(values)
	}

	onClickToHideLoginFormModal(isShowLoginFormModal){
		this.props.switchLoginFormModalStatus(isShowLoginFormModal)
	}

	render(){
		const { handleSubmit, pristine, submitting, invalid } = this.props
		return(
			<Dialog open={this.props.isShowLoginFormModal} >
				<form onSubmit={handleSubmit(this.onSubmitLoginForm)}>
					<Field name='id' label='id' type="text" component={renderValidateField} />
					<Field name='password' label='password' type="password" component={renderValidateField} />
					<input type="button" value="キャンセル" onClick={()=>this.onClickToHideLoginFormModal(this.props.isShowLoginFormModal)} />
					<input type="submit" value="ログイン" disabled={pristine || submitting || invalid} />
				</form>
				<p>{this.props.responseMessage}</p>
			</Dialog>
		)
	}
}

const mapStateToProps = state => ({
	isShowLoginFormModal: state.submit.isShowLoginFormModal,
	responseMessage: state.submit.responseMessage
})

const mapDispatchToProps = ({ callLoginApi, switchLoginFormModalStatus })

export default connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({validate, form:'LoginForm'})(LoginFormModal)
)
