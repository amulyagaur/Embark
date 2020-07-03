import React from 'react';
import Header from './Header';
import {Grid} from '@material-ui/core';
import Filter from './Filter'
import Content from './Content';

class App extends React.Component{
  render() {
  
  return (
    <div className="App">
      <Header/>
      <Grid container >
        <Grid item container spacing={3}>
          <Grid item xs={false} sm = {1}></Grid>
          <Grid item xs = {12} sm = {3}><Filter/></Grid>
          <Grid item xs = {12} sm = {7}><Content/></Grid>
          <Grid item xs={false} sm = {1}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}
}

export default App;
