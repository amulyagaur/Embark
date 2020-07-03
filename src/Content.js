import React from 'react';
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from './JobCard';

const useStyles = makeStyles((theme) => ({
    uppeMargin:{
        margin: theme.spacing(2, 1)
    }
}));

function Content(props){
    const classes = useStyles();
    return(
        <div className={classes.uppeMargin}>
        <Grid container direction="row" spacing={2}>
            <Grid item sm={12}>
                <JobCard/>
            </Grid> 
            <Grid item sm={12}>
                <JobCard/>
            </Grid> 
            <Grid item sm={12}>
                <JobCard/>
            </Grid> 
            <Grid item sm={12}>
                <JobCard/>
            </Grid> 
        </Grid>
        </div>
    )
}

export default Content;