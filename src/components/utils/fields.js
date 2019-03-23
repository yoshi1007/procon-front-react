import React from 'react';

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
