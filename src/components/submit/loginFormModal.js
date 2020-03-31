import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

class LoginFormModal extends Component{

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this)
	}
	
	async onSubmitLoginForm(values){
		await this.props.callLoginApi(values)
	}

	render(){
		const { handleSubmit, pristine, submitting, invalid } = this.props
		return(
			<Dialog open={this.props.isShowSessionFormModal} >
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<Field name='id' label='id' type="text" component={renderValidateField} />
					<Field name='password' label='password' type="text" component={renderValidateField} />
					<input type="submit" value="ログイン" disabled={pristine || submitting || invalid} />
				</form>
			</Dialog>
		)
	}
}

const mapStateToProps = state => ({
  isShowLoginFormModal: state.submission.isShowLoginFormModal
})

const mapDispatchToProps = ({ callLoginApi })

export default connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({validate, form:'LoginForm'})(Submit)
)
