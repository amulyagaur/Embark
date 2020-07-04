import React,{useState,useEffect} from 'react';
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
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
            .then((response) => response.json())
            .then(res => setJobs(res))
            .catch((err)=>console.log(err))
    },[])

    return(
        <div className={classes.uppeMargin}>
        <Grid container direction="row" spacing={2}>
            {
                jobs.map((ob) =>
                    (<Grid item sm={12}>
                        <JobCard 
                            companyLogo={ob.company_logo} 
                            companyName={ob.company}
                            positon={ob.title}
                            positionType={ob.type}
                            location={ob.location}
                            timestamp={ob.created_at}
                            />
                    </Grid>)
                )
            }
        </Grid>
        </div>
    )
}

export default Content;