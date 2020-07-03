import React from 'react';
import { Card, CardHeader, Avatar, Checkbox, CardContent, FormControlLabel, FormGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
    upperMargin:{
        margin: theme.spacing(2, 1)
    }
}));

function Filter(props){
    const classes = useStyles();
    return(
        <div className={classes.upperMargin}>
        <Card>
            <CardHeader 
                title="Filters"
                avatar={
                    <Avatar>
                        <FilterListIcon/>
                    </Avatar>
                }>
            </CardHeader>
            <CardContent>
                <FormGroup>
                    <FormControlLabel
                    control={<Checkbox></Checkbox>}
                    label="London"
                    />
                    <FormControlLabel
                    control={<Checkbox></Checkbox>}
                    label="Amsterdam"
                    />
                    <FormControlLabel
                    control={<Checkbox></Checkbox>}
                    label="New York"
                    />
                    <FormControlLabel
                    control={<Checkbox></Checkbox>}
                    label="Berlin"
                    />
                </FormGroup>
            </CardContent>
        </Card>
        </div>
    )
}

export default Filter;