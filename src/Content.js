import React,{useState,useEffect} from 'react';
import { Card, CardHeader, Avatar, Checkbox, CardContent, FormControlLabel, FormGroup, Typography, TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from './JobCard';
import FilterListIcon from '@material-ui/icons/FilterList';
import DescriptionIcon from '@material-ui/icons/Description';
import PublicIcon from '@material-ui/icons/Public';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    uppeMargin:{
        margin: theme.spacing(2, 1)
    },
    filterType:{
        color:'blue'
    } 
}));

function Content(props){

    const classes = useStyles();
    const [jobs,setJobs] = useState([])
    const [ftime,setFtime] = useState(false);
    const [ptime,setPtime] = useState(false);
    const [desc,setDesc] = useState("");
    const [loc,setLoc] = useState("");
    const [lat,setLat] = useState("");
    const [long,setLong] = useState("");
    const [show,setShow] = useState(false);

    const handleFChange = (event) => {
        event.target.checked === true ? setFtime(true):setFtime(false);
    };
  
    const handlePChange = (event) => {
        event.target.checked === true ? setPtime(true):setPtime(false);
    };

    const handleDChange = (event) => {
        setDesc(event.target.value);
    };

    const handleLChange = (event) => {
        setLoc(event.target.value);
    };

    const handleLatChange = (event) => {
        setLat(event.target.value);
    };

    const handleLongChange = (event) => {
        setLong(event.target.value);
    };

    const handleFilters = () => {
        setShow(true);
        var baseUrl = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";
        if(desc.length>0)
            baseUrl+=`description=${desc}&`
        if(loc.length>0)
            baseUrl+=`location=${loc}&`
        if(lat.length>0 && long.length>0)
            baseUrl+=`lat=${lat}&long=${long}&`
        if(ftime===true)
            baseUrl += `full_time=true&`
        fetch(baseUrl)
        .then((response) => response.json())
        .then(res => {
            setJobs(res);
            setShow(false);
        })
        .catch((err)=>console.log(err))
    }

    const handleClear = () => {
        setJobs([]);
        setFtime(false);
        setPtime(false);
        setDesc("");
        setLoc("");
        setLat("");
        setLong("");
        setShow(false);
    }

    useEffect(()=>{
        setShow(true);
        fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
            .then((response) => response.json())
            .then(res => {
                setJobs(res);
                setShow(false);
            })
            .catch((err)=>console.log(err))
    },[])

    return(
        <Grid container>
            <Grid item xs={12} sm={3} lg={3}>
            <div className={classes.uppeMargin}>
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
                    control={<Checkbox id="full" checked={ftime} onChange={handleFChange}></Checkbox>}
                    label="Full Time"
                    />
                    <FormControlLabel
                    control={<Checkbox id="part" checked={ptime} onChange={handlePChange}></Checkbox>}
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
            <TextField label="A search term" id="descfield" value={desc} onChange={handleDChange} />
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
            <TextField  label="A city name, zip code etc." id="locfield" value={loc} onChange={handleLChange} disabled={lat>0 || long>0}/>
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
            <TextField  label="Latitude" id="latfield" value={lat} onChange={handleLatChange} disabled={loc.length>0}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MyLocationIcon />
          </Grid>
          <Grid item>
            <TextField  label="Longitude" id="longfield" value={long} onChange={handleLongChange} disabled={loc.length>0}/>
          </Grid>
        </Grid>
        <br/>
        <hr/>
        <br/>
        <Button href="#" color="primary" variant="contained" className={classes.link} fullWidth onClick={handleFilters}>
            Search
          </Button>
          <br/><br/>
          <Button href="#" color="primary" variant="contained" className={classes.link} fullWidth onClick={handleClear}>
            Clear
          </Button>
            </CardContent>
        </Card>
        </div>
            </Grid>
            <Grid item xs={12} sm={9} lg={9}>
        <div className={classes.uppeMargin}>
        { show===true && (
            <LinearProgress />)}
        <Grid container direction="row" spacing={2}>
            {
                jobs.map((ob,index) =>
                    (<Grid item sm={12} key={index}>
                        <JobCard 
                            companyLogo={ob.company_logo!=null ? ob.company_logo : "https://www.childhood.org.au/app/uploads/2017/07/ACF-logo-placeholder.png"} 
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
        </Grid>
        </Grid>
    )
}

export default Content;