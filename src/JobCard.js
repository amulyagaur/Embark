import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PublicIcon from '@material-ui/icons/Public';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    uppMargin:{
        margin: theme.spacing(1, 0)
    }
}));
function JobCard(props){
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item sm={2}>
                        <img src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBblNFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8401c5084da6bb1a0cacdd3ef319e6f919fcc738/Kasisto_Logo_c90x90.png" alt="logo"/>
                    </Grid>
                    <Grid item sm={10}>
                                <Typography variant="caption">
                                    Kasisto
                                </Typography>
                                <Typography variant="h5">
                                    Front-End Software Engineer
                                </Typography>
                                <div className={classes.uppMargin}>
                                <Grid container spacing={1}>
                                    <Grid item sm={6}>
                                        <Button variant="outlined" color="primary">Full Time</Button>
                                    </Grid>
                                    <Grid item sm={3}>
                                        <Grid container>
                                            <Grid item sm={2}>
                                                <PublicIcon/>
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Typography variant="body1">New York</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={3}>
                                    <Grid container>
                                            <Grid item sm={2}>
                                                <AccessTimeIcon/>
                                            </Grid>
                                            <Grid item sm={10}>
                                                <Typography variant="body1">3 days ago</Typography>
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