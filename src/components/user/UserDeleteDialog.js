import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { deleteUser, closeUserDeleteDialog } from '../../actions/user';

class UserDeleteDialog extends Component{

  onClickToClose(){
    this.props.closeUserDeleteDialog()
  }

  async onClickToDeleteUser(){
    await this.props.deleteUser(this.props.id)
    this.props.history.push(`/users`)
  }

  render(){
    return(
      <Dialog
          open={this.props.isOpenUserDeleteDialog}
          onClose={()=>this.onClickToClose()}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>this.onClickToClose()} color="primary">
            キャンセル
          </Button>
          <Button onClick={()=>this.onClickToDeleteUser()} color="secondary" autoFocus>
            削除する
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const mapStateToProps = state => ({
  id: state.user.id,
  isOpenUserDeleteDialog: state.user.isOpenUserDeleteDialog
})

const mapDispatchToProps = ({ deleteUser, closeUserDeleteDialog })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDeleteDialog))
