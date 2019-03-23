export const validate = (values) => {
  const errors = {}

  //valuesには入力された値が渡ってくる
  if(!values.name){
    errors.name = "Please Enter Name!"
  }
  if(!values.mailAddress){
    errors.mailAddress = "Please Enter MailAddress!"
  }

  return errors
}
