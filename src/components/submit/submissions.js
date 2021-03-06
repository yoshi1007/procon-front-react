import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RenderSubmissions from './renderSubmissions';
import { getSubmissions, getRemainingTime, resetFlag } from '../../actions/submit';

class Submissions extends Component{

  componentDidMount(){
    this.props.getSubmissions()
    setInterval(()=>this.props.resetFlag(), 5000)
    setInterval(()=>this.props.getRemainingTime(),1000)
    setInterval(()=>this.props.getSubmissions(),10000)
  }

  render(){
    const { classes } = this.props
    return(
      <Paper className={classes.list}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">チーム名</StyledTableCell>
              <StyledTableCell>問題名</StyledTableCell>
              <StyledTableCell>言語</StyledTableCell>
              <StyledTableCell>投稿時間</StyledTableCell>
              <StyledTableCell>結果</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <RenderSubmissions submissions={this.props.submissions} status={this.props.status} problems={this.props.problems} users={this.props.users} />
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  submissions: state.submit.submissions,
  status: state.submit.status,
  isAccepted: state.submit.isAccepted,
  problems: state.submit.problems,
  users: state.common.users
})

const mapDispatchToProps = ({ getSubmissions, getRemainingTime, resetFlag })

export const StyledTableCell = withStyles(theme => ({
  head: {
    fontSize: 18,
  },
  body: {
    fontSize: 30,
    padding: '20px 56px 20px 24px'
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  list: {
    width: '70%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginRight: '10px',
    height: '100%',
  },
  table: {
    minWidth: 700,
  },
  card: {
    minHeight: 1000,
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  flex: {
    display: 'flex'
  },
  dialog: {
    textAlign: 'center',
  },
  dialogTitle: {
    fontSize: 30,
    color: '#FFD700'
  },
  userId: {
    fontSize: 70
  }
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Submissions))
