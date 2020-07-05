import React from 'react';
import Header from './Header';
import {Grid} from '@material-ui/core';
import Content from './Content';

function App() {

  return (
    <div className="App">
      <Header/>
      <Grid container >
        <Grid item container spacing={3}>
          <Grid item xs={false} sm = {1}></Grid>
          <Grid item xs = {12} sm = {10}><Content/></Grid>
          <Grid item xs={false} sm = {1}></Grid>
        </Grid>
      </Grid>
    </div>
  );

}

export default App;
