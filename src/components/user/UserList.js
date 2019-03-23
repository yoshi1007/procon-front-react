import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Button from '@material-ui/core/Button';

export default class UserList extends Component{
  render(){
    return _.map(this.props.users, user=>(
      <tr key={user.id}>
        <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
        <td>{user.name}</td>
        <td>{user.mailAddress}</td>
        <td><Button color="secondary" variant="contained" onClick={()=>this.props.onClickToOpenUserDeleteDialog(user.id)}>削除</Button></td>
      </tr>
    ))
  }
}
