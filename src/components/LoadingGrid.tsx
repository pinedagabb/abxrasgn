import React from 'react';

import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export const LoadingGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Skeleton variant='rect' height={118} />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant='rect' height={118} />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant='rect' height={118} />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant='rect' height={118} />
      </Grid>
    </Grid>
  );
};
