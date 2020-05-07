import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { reduxForm, Field } from 'redux-form';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AceEditor from "react-ace";
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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
	
	renderAlert(props){
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}

	render(){
		const { handleSubmit, pristine, submitting, invalid, classes } = this.props

		return(
			<div id="submit">
				<Card>
					<CardContent>
					<Typography>ようこそ {this.props.user.id} {this.props.user.name}さん</Typography>
					<Button type="button" variant="outlined" color="primary" onClick={()=>this.onClickToDisplayLoginFormModal(this.props.isShowLoginFormModal)} >
						ログイン	
					</Button>
					<LoginFormModal />
					</CardContent>
				</Card>

				<Card className={classes.secondCard}>
					<CardContent>
					<form className={classes.submitForm} onSubmit={handleSubmit(this.onSubmit)}>
					<Typography variant="h5">提出フォーム</Typography>
						<Field name='problemId' label='問題' classes={classes} component={renderProblemIdField} />
						<Field name='language' label='言語' classes={classes} component={renderLanguageField} />
						<Field name='sourceCode' component={renderReactAceField} />
						<Button type="submit" variant="contained" color="primary" disabled={pristine || submitting || invalid}>
							提出	
						</Button>
					</form>
				
					<Snackbar
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'center',
						}}
						open={this.props.isOpenSnackBar}
						autoHideDuration={3000}
						onClose={()=>this.handleClose()}
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
					>
						<this.renderAlert onClose={()=>this.handleClose()} severity={this.props.severity}>{this.props.message}</this.renderAlert>
					</Snackbar>
					</CardContent>						
				</Card>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const initialValues = {
		problemId: 'ITP1_1_A',
		language: 'C',
		sourceCode: ''
	}
	return {
		isShowLoginFormModal: state.submit.isShowLoginFormModal,
		isOpenSnackBar: state.submit.isOpenSnackBar,
		message: state.submit.message,
		initialValues: initialValues,
		user: state.submit.user,
		severity: state.submit.severity,
	}
}

const mapDispatchToProps = ({ callSubmitApi, switchLoginFormModalStatus, onClickToCloseSnackbar })

const styles = theme => ({
	formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
	},
	submitForm: {},
	secondCard: {
		marginTop: '10px',
	}
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({validate, form:'SubmitForm'})(Submit)
))