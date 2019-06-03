import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { StyledTableCell } from '../top/top';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import RenderRanking from './renderRanking';
import { getRanking, closeSnackbar } from '../../actions/ranking';

class Ranking extends Component{

  onClickToGetRanking(){
    this.props.getRanking()
  }

  handleClose(){
    this.props.closeSnackbar()
  }

  render(){
    const { classes } = this.props
    console.log(this.props)
    return(
      <Paper className={classes.root}>
        <Table className={classes.table} onClick={()=>this.onClickToGetRanking()}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">順位</StyledTableCell>
              <StyledTableCell>チーム名</StyledTableCell>
              <StyledTableCell>解答数</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <RenderRanking ranking={this.props.ranking} />
          </TableBody>
        </Table>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.props.isOpenSnackBar}
          autoHideDuration={1000}
          message="ランキングを更新しました"
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={()=>this.handleClose()}
              >
            <CloseIcon />
          </IconButton>,
         ]}
        />
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  ranking: state.ranking.ranking,
  isOpenSnackBar: state.ranking.isOpenSnackBar
})

const mapDispatchToProps = ({ getRanking, closeSnackbar })

const styles = theme => ({
  root: {
    width: '30%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    height: '100%',
  },
  card: {
    minHeight: 1000,
    minWidth: 275,
  },
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Ranking))
