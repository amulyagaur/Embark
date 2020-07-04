import React from 'react';
import { Card, CardHeader, Avatar, Checkbox, CardContent, FormControlLabel, FormGroup, Typography, TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import DescriptionIcon from '@material-ui/icons/Description';
import PublicIcon from '@material-ui/icons/Public';
import MyLocationIcon from '@material-ui/icons/MyLocation';

const useStyles = makeStyles((theme) => ({
    upperMargin:{
        margin: theme.spacing(2, 1)
    },
    filterType:{
        color:'blue'
    } 
}));

function Filter(props){
    const classes = useStyles();
    return(
        <div className={classes.upperMargin}>
        <Card raised>
            <CardHeader 
                title="Choose suitable filters"
                avatar={
                    <Avatar>
                        <FilterListIcon/>
                    </Avatar>
                }>
            </CardHeader>
            <CardContent>
            <hr/>
                <div className={classes.filterType}>
                <Typography variant="h6">
                    Employment Type
                </Typography>
                </div>
                <FormGroup>
                    <FormControlLabel
                    control={<Checkbox></Checkbox>}
                    label="Full Time"
                    />
                    <FormControlLabel
                    control={<Checkbox></Checkbox>}
                    label="Part Time"
                    />
                </FormGroup>
                <hr/>
                <div className={classes.filterType}>
                <Typography variant="h6">
                    Description
                </Typography>
                </div>
                <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <DescriptionIcon />
          </Grid>
          <Grid item>
            <TextField label="A search term" />
          </Grid>
        </Grid>
        <br/>
                <hr/>
                <div className={classes.filterType}>
                <Typography variant="h6">
                    Location
                </Typography>
                </div>
                <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <PublicIcon />
          </Grid>
          <Grid item>
            <TextField  label="A city name, zip code etc." />
          </Grid>
        </Grid>
        <br/>
        <hr/>
        <div className={classes.filterType}>
                <Typography variant="h6">
                    Latitude Longitude
                </Typography>
                </div>
                <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MyLocationIcon />
          </Grid>
          <Grid item>
            <TextField  label="Latitude" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MyLocationIcon />
          </Grid>
          <Grid item>
            <TextField  label="Longitude" />
          </Grid>
        </Grid>
        <br/>
        <hr/>
        <br/>
        <Button href="#" color="primary" variant="contained" className={classes.link}>
            Search
          </Button>
            </CardContent>
        </Card>
        </div>
    )
}

export default Filter;