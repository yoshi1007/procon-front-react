import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TableCell from '@material-ui/core/TableCell';
import Submissions from '../submit/submissions';
import Ranking from '../ranking/ranking';

class Top extends Component{
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

            <div className={classes.flex}>
              <Submissions />
              <Ranking />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  remainingTime: state.submit.remainingTime
})

const mapDispatchToProps = ({})

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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Top))
