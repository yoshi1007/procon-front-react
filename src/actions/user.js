import { URL, myHttpClient } from './index';
export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const OPEN_USER_DELETE_DIALOG = 'OPEN_USER_DELETE_DIALOG';
export const CLOSE_USER_DELETE_DIALOG = 'CLOSE_USER_DELETE_DIALOG';

export const getUsers = () => async dispatch => {
  await myHttpClient.get(`${URL}/users`
  ).then((response) => {
    console.log(response)
    dispatch({type:GET_USERS, response})
  }).catch((error)=>{
    console.log(error.config)
  })
}

export const getUser = (id) => async dispatch => {
  await myHttpClient.get(`${URL}/users/${id}`
  ).then((response) => {
    console.log(response)
    dispatch({type:GET_USER, response})
  }).catch((error)=>{
    console.log(error.config)
  })
}

export const createUser = (values) => async dispatch => {
  await myHttpClient.post(`${URL}/users`,values
  ).then((response) => {
    console.log(response)
    dispatch({type:CREATE_USER, response})
  }).catch((error)=>{
    console.log(error.config)
  })
}

export const updateUser = (values, id) => async dispatch => {
  await myHttpClient.put(`${URL}/users/${id}`,values
  ).then((response) => {
    console.log(response)
    dispatch({type:UPDATE_USER, response})
  }).catch((error)=>{
    console.log(error.config)
  })
}

export const deleteUser = (id) => async dispatch => {
  await myHttpClient.delete(`${URL}/users/${id}`
  ).then((response)=>{
    console.log(response)
    dispatch({type:DELETE_USER,id})
  }).catch((error)=>{
    console.log(error.config)
  })
}

export const openUserDeleteDialog = (id) => async dispatch => {
  dispatch({ type:OPEN_USER_DELETE_DIALOG, id })
}

export const closeUserDeleteDialog = () => async dispatch => {
  dispatch({ type:CLOSE_USER_DELETE_DIALOG })
}
