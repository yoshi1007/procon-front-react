import React from 'react';
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/theme-monokai'

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
      <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  )
}

export const renderProblemIdField = (field) => {
  const { input, label, type, placeholder, meta: {touched, error} } = field
  return(
    <div>
      <label>{label}</label>
      <select {...input}>
        <option value="ITP1_1_A">ITP1_1_A</option>
        <option value="2000">問題B</option>
        <option value="3000">問題C</option>
        <option value="4000">問題D</option>
        <option value="5000">問題E</option>
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )
}

export const renderLanguageField = (field) => {
  const { input, label, type, placeholder, meta: {touched, error} } = field
  return(
    <div>
      <label>{label}</label>
      <select {...input}>
        <option value="C">C</option>
        <option value="C++">C++</option>
        <option value="JAVA">JAVA</option>
        <option value="C++11">C++11</option>
        <option value="C++14">C++14</option>
        <option value="C#">C#</option>
        <option value="D">D</option>
        <option value="Ruby">Ruby</option>
        <option value="Python">Python</option>
        <option value="Python3">Python3</option>
        <option value="PHP">PHP</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Scala">Scala</option>
        <option value="Haskell">Haskell</option>
        <option value="OCaml">OCaml</option>
        <option value="Rust">Rust</option>
        <option value="Go">Go</option>
        <option value="Kotlin">Kotlin</option>

      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )
}

export const renderReactAceField = (field) => {

  console.log(field)

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
    <AceEditor
        theme={theme}
        mode={mode}
        fontSize={fontSize}
        tabSize={tabSize}
        width={width}
        height={height}
        onBlur={() => field.input.onBlur(field.input.value)}
        editorProps={{$blockScrolling: Infinity}}
        {...input}
        {...custom}
    />
  )
}