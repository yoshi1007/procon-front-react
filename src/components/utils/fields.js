import React from 'react';
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/theme-monokai'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash'

import { problems, languages } from '../../actions/index'


export const renderField = (field) => {
  const { input, label, type, placeholder } = field
  return(
    <div>
      <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type} />
    </div>
  )
}

export const renderValidateField = (field) => {
  const { input, label, type, placeholder, meta: {touched, error} } = field
  return(
    <div>
      <TextField {...input} margin="dense" label={label} type={type} fullWidth/>
      {touched && error && <span>{error}</span>}
    </div>
  )
}

export const renderProblemIdField = (field) => {
  console.log(field)
  const { input, label, classes, meta: {touched, error} } = field
  
  return(
    <FormControl className={classes.formControl}> 
      <InputLabel id="problem-id-label">{label}</InputLabel>
      <Select labelId="problem-id-label" id="problem-id-select" {...input}>
        {Object.keys(problems).map((key, index)=>(<MenuItem value={key} key={index} >{problems[key]}</MenuItem>))}
      </Select>
      {touched && error && <span>{error}</span>}
    </FormControl>
  )
}

export const renderLanguageField = (field) => {
  const { input, label, classes, meta: {touched, error} } = field
  return(
    <FormControl className={classes.formControl}>
    <InputLabel id="language-label">{label}</InputLabel>
      <Select labelId="language-label" id="language-select" {...input}>
        {languages.map(item=>(<MenuItem value={item} key={item} >{item}</MenuItem>))}
      </Select>
      {touched && error && <span>{error}</span>}
    </FormControl>
  )
}

export const renderReactAceField = (field) => {
  const {
    input,
    mode = '',
    theme = 'monokai',
    fontSize = 14,
    tabSize = 2,
    width = '1000px',
    height = '500px',
    ...custom
  } = field;

return (
  <div className="sourceCodeForm">
    <InputLabel id="source-code-label">ソースコード</InputLabel>
    <AceEditor
        theme={theme}
        mode={mode}
        fontSize={fontSize}
        tabSize={tabSize}
        width={width}
        height={height}
        onBlur={() => field.input.onBlur(field.input.value)}
        editorProps={{$blockScrolling: Infinity}}
        labelId="source-code-label"
        id="source-code-label"
        {...input}
        {...custom}
    />
  </div>
  )
}