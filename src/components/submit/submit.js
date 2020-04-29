import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

import LoginFormModal from './loginFormModal';
import { callSubmitApi, switchLoginFormModalStatus, onClickToCloseSnackbar } from '../../actions/submit';
import { renderProblemIdField,renderLanguageField,renderReactAceField } from '../utils/fields';
import { validate } from '../utils/validates';

class Submit extends Component{

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this)
	}
	
	async onSubmit(values){
		console.log(values)
		await this.props.callSubmitApi(values)
	}

	handleClose(){
		this.props.onClickToCloseSnackbar()
	}

	onClickToDisplayLoginFormModal(isShowLoginFormModal){
		this.props.switchLoginFormModalStatus(isShowLoginFormModal)
	}

	render(){
		const { handleSubmit, pristine, submitting, invalid, languageValue } = this.props
		return(
			<div id="main">

				<input type="button" value="ログイン" onClick={()=>this.onClickToDisplayLoginFormModal(this.props.isShowLoginFormModal)} />
				<LoginFormModal />

				<form onSubmit={handleSubmit(this.onSubmit)}>
					<Field name='problemId' label='問題' component={renderProblemIdField} />
					<Field name='language' label='言語' component={renderLanguageField} />
					<Field name='sourceCode' component={renderReactAceField} />
					<input type="submit" value="提出" disabled={pristine || submitting || invalid} />
				</form>

				<Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.props.isOpenSnackBar}
          autoHideDuration={1000}
					message={this.props.responseMessage}
					action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={()=>this.handleClose()}
              >
            	<CloseIcon />
          	</IconButton>,
         	]}
        />
			</div>
		)
	}
}

const mapStateToProps = state => {
	const initialValues = {
		problemId: 'ITP1_1_A',
		language: 'JAVA',
		sourceCode: ''
	}
	return {
		isShowLoginFormModal: state.submit.isShowLoginFormModal,
		isOpenSnackBar: state.submit.isOpenSnackBar,
		responseMessage: state.submit.responseMessage,
		initialValues: initialValues
	}
}

const mapDispatchToProps = ({ callSubmitApi, switchLoginFormModalStatus, onClickToCloseSnackbar })

export default connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({validate, form:'SubmitForm'})(Submit)
)