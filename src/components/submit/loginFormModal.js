import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

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
			<Dialog open={this.props.isShowLoginFormModal} fullWidth={true} maxWidth = {'xs'} onClose={()=>this.onClickToHideLoginFormModal(this.props.isShowLoginFormModal)}>
        <DialogTitle id="session-dialog-title">ログイン</DialogTitle>
					<form onSubmit={handleSubmit(this.onSubmitLoginForm)}>
						<DialogContent>
							<Field name='id' label='id' type="text" component={renderValidateField} />
							<Field name='password' label='password' type="password" component={renderValidateField} />
						</DialogContent>
						<DialogActions>
							<Button type='button' onClick={()=>this.onClickToHideLoginFormModal(this.props.isShowLoginFormModal)}>
								キャンセル
							</Button>
							<Button type='submit' color="primary" disabled={pristine || submitting || invalid}>
								ログイン
							</Button>
						</DialogActions>
					</form>
			</Dialog>
		)
	}
}

const mapStateToProps = state => ({
	isShowLoginFormModal: state.submit.isShowLoginFormModal,
	message: state.submit.message
})

const mapDispatchToProps = ({ callLoginApi, switchLoginFormModalStatus })

export default connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({validate, form:'LoginForm'})(LoginFormModal)
)
