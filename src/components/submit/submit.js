import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

class Submit extends Component{

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this)
	}
	
	async onSubmitSolutionForm(values){
		await this.props.callLoginApi(values)
	}

	render(){
		const { handleSubmit, pristine, submitting, invalid } = this.props
		return(
			<div id="main">
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<Field name='id' label='id' type="text" component={renderValidateField} />
					<Field name='password' label='password' type="text" component={renderValidateField} />
					<input type="submit" value="ログイン" disabled={pristine || submitting || invalid} />
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = ({ callLoginApi })

export default connect(mapStateToProps, mapDispatchToProps)(
	reduxForm({validate, form:'SessionForm'})(Submit)
)
