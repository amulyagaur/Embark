import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PublicIcon from '@material-ui/icons/Public';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    uppMargin:{
        margin: theme.spacing(1, 0)
    },
    imgCss:{
        length:'80%',
        width:'80%'
    }
}));
function JobCard(props){
    const classes = useStyles();
    return (
        <Card raised>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={2} lg={2}>
                        <img src={props.companyLogo} alt="logo" className={classes.imgCss}/>
                    </Grid>
                    <Grid item xs={12} sm={10} lg={10}>
                                <Typography variant="caption">
                                    {props.companyName}
                                </Typography>
                                <Typography variant="h5">
                                    {props.positon}
                                </Typography>
                                <div className={classes.uppMargin}>
                                <Grid container spacing={1}>
                                    <Grid item xs={3} sm={6} lg={6}>
                                        <Button variant="outlined" color="primary">{props.positionType}</Button>
                                    </Grid>
                                    <Grid item xs={5} sm={3} lg={3}>
                                        <Grid container spacing={1}>
                                            <Grid item sm={2}>
                                                <PublicIcon/>
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Typography variant="body1">{props.location}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} sm={3} lg={3}>
                                    <Grid container spacing={1}>
                                            <Grid item sm={2}>
                                                <AccessTimeIcon/>
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Typography variant="body1">{props.timestamp.substr(0,10)}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default JobCard;
