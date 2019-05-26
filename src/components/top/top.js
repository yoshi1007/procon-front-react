import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import RenderSubmissions from './renderSubmissions';
import { getSubmissions, getRemainingTime, resetFlag } from '../../actions/submission';

class Top extends Component{

  componentDidMount(){
    this.props.getSubmissions()
    setInterval(()=>this.props.resetFlag(), 5000)
    setInterval(()=>this.props.getRemainingTime(),1000)
    setInterval(()=>this.props.getSubmissions(),10000)
  }

  render(){
    const { classes } = this.props
    return(
      <div id="main">
        <Card className={classes.card}>
          <CardContent>
            <Paper className={classes.root}>
              <div className="remaining-time">
                <h1><span>残り...</span>{this.props.remainingTime}</h1>
              </div>
            </Paper>

            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">チーム名</TableCell>
                    <TableCell>問題名</TableCell>
                    <TableCell>言語</TableCell>
                    <TableCell>投稿時間</TableCell>
                    <TableCell>結果</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <RenderSubmissions submissions={this.props.submissions} status={this.props.status} />
                </TableBody>
              </Table>
            </Paper>

          </CardContent>
        </Card>

        <Dialog open={this.props.isAccepted} aria-labelledby="simple-dialog-title">
          { this.props.submissions.length > 0 && <DialogTitle id="simple-dialog-title">Conglatulation!<span className="dialog-span">チーム「{this.props.submissions[0].userId}」</span></DialogTitle>}
        </Dialog>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  submissions: state.submission.submissions,
  status: state.submission.status,
  remainingTime: state.submission.remainingTime,
  isAccepted: state.submission.isAccepted
})

const mapDispatchToProps = ({ getSubmissions, getRemainingTime, resetFlag })

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
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
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Top))
