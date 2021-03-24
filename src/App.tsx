import { Container, Grid } from '@material-ui/core';
import React from 'react';
import DragRaceGifs from './components/DragRaceGifs/DragRaceGifs';

import './overrides.css';

function App() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <DragRaceGifs />
      </Grid>
    </Container>
  );
}

export default App;
