import React from 'react';
import {AppBar, Toolbar, Grid} from '@material-ui/core';
import logo from './images/logo.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imgCs:{
      length:'100%',
      width:'100%'
  }
}));
function Header(props) {
  const classes = useStyles();
        return(
            <AppBar 
                color="default" position="relative">
                <Grid container>
                  <Grid item xs={2} sm = {3} lg={4}></Grid>
                  <Grid item xs={8} sm = {6} lg={4}>
                <Toolbar>
                <img src={logo} alt="logo" className={classes.imgCs}/>
                </Toolbar>
                </Grid>
                <Grid item xs={2} sm = {3} lg={4}></Grid>
                </Grid>
            </AppBar>
        )
    
}

export default Header;