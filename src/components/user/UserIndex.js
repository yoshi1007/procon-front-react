import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserDeleteDialog from './UserDeleteDialog';
import { getUsers, openUserDeleteDialog } from '../../actions/user';
import  UserList  from './UserList';

class UserIndex extends Component{

  constructor(props){
    super(props)
    this.onClickToOpenUserDeleteDialog=this.onClickToOpenUserDeleteDialog.bind(this)
  }

  async componentDidMount(){
    await this.props.getUsers()
  }

  onClickToOpenUserDeleteDialog(id){
    this.props.openUserDeleteDialog(id)
  }

  render(){
    return(
      <div>
        <UserDeleteDialog />
        <Link to={'/users/new'}>新規作成</Link>
        <table>
        <thead>
          <tr>
            <th>id</th>
            <th>名前</th>
            <th>メールアドレス</th>
            <th>ボタン</th>
          </tr>
        </thead>
        <tbody>
          <UserList users={this.props.users} onClickToOpenUserDeleteDialog={this.onClickToOpenUserDeleteDialog} />
        </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users
})

const mapDispatchToProps = { getUsers, openUserDeleteDialog }

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)
