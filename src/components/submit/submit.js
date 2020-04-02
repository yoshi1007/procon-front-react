import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import LoginFormModal from './loginFormModal';
import { switchLoginFormModalStatus } from '../../actions/submit';
import { renderValidateField } from '../utils/fields';
import { validate } from '../utils/validates';

class Submit extends Component{

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this)
	}
	
	async onSubmit(values){
		
	}

	onClickToDisplayLoginFormModal(isShowLoginFormModal){
		console.log(isShowLoginFormModal)
		this.props.switchLoginFormModalStatus(isShowLoginFormModal)
	}

	render(){
		const { handleSubmit, pristine, submitting, invalid } = this.props
		return(
			<div id="main">

				<input type="button" value="ログイン" onClick={()=>this.onClickToDisplayLoginFormModal(this.props.isShowLoginFormModal)} />

				<form onSubmit={handleSubmit(this.onSubmit)}>
					<Field name='id' label='id' type="text" component={renderValidateField} />
					<Field name='password' label='password' type="text" component={renderValidateField} />
					<input type="submit" value="提出" disabled={pristine || submitting || invalid} />
				</form>

				<LoginFormModal />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isShowLoginFormModal: state.submit.isShowLoginFormModal
})

const mapDispatchToProps = ({ switchLoginFormModalStatus })

export default connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({validate, form:'SubmitForm'})(Submit)
)
