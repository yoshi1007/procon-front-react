import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import RenderRanking from './renderRanking';
import { getRanking } from '../../actions/ranking';

class Ranking extends Component{

  componentDidMount(){
    this.props.getRanking()
    setInterval(()=>this.props.getRanking(),60000)
  }

  render(){
    const { classes } = this.props
    return(
      <div id="ranking">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="left">順位</TableCell>
                <TableCell>チーム名</TableCell>
                <TableCell>解答数</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RenderRanking ranking={this.props.ranking} />
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ranking: state.ranking.ranking
})

const mapDispatchToProps = ({ getRanking })

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
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Ranking))
