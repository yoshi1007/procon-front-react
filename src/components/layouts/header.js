import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component{
  render(){
    const { classes } = this.props
    return(
      <div id='header' className={classes.root}>
        <AppBar position="fixed" className={classes.btcColor}>
          <Toolbar>
            {/*
            <IconButton color="inherit" aria-label="Menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            */}
            <h1>BTC Programing Contest</h1>
            {/*<Button color="inherit">ランキング</Button>*/}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const styles = {
  btcColor: {
    backgroundColor: '#375623',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


export default withStyles(styles)(Header);
