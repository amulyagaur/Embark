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
        length:'120px',
        width:'120px'
    }
}));
function JobCard(props){
    const classes = useStyles();
    return (
        <Card raised>
            <CardContent>
                <Grid container>
                    <Grid item sm={2}>
                        <img src={props.companyLogo} alt="https://www.childhood.org.au/app/uploads/2017/07/ACF-logo-placeholder.png" className={classes.imgCss}/>
                    </Grid>
                    <Grid item sm={10}>
                                <Typography variant="caption">
                                    {props.companyName}
                                </Typography>
                                <Typography variant="h5">
                                    {props.positon}
                                </Typography>
                                <div className={classes.uppMargin}>
                                <Grid container spacing={1}>
                                    <Grid item sm={6}>
                                        <Button variant="outlined" color="primary">{props.positionType}</Button>
                                    </Grid>
                                    <Grid item sm={3}>
                                        <Grid container>
                                            <Grid item sm={2}>
                                                <PublicIcon/>
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Typography variant="body1">{props.location}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={3}>
                                    <Grid container>
                                            <Grid item sm={2}>
                                                <AccessTimeIcon/>
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Typography variant="body1">{props.timestamp}</Typography>
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