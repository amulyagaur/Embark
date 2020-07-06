import React from 'react';
import {AppBar, Toolbar, Grid} from '@material-ui/core';
import logo from './images/logo.png'

function Header(props) {

        return(
            <AppBar 
                color="default" position="relative">
                <Grid container>
                  <Grid item xs={3} sm = {4} lg={5}></Grid>
                  <Grid item xs={8} sm = {6} lg={4}>
                <Toolbar>
                <img src={logo} alt="logo"/>
                </Toolbar>
                </Grid>
                <Grid item xs={1} sm = {2} lg={3}></Grid>
                </Grid>
            </AppBar>
        )
    
}

export default Header;