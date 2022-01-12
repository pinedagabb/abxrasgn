import React from 'react';
import { useHistory } from 'react-router';

import { Box, Button, Typography } from '@material-ui/core';

import { PageContainer } from '../components';

const HomePage = () => {
  const history = useHistory();

  const goToSourcesPage = () => {
    history.push('/sources');
  };

  return (
    <PageContainer>
      <Typography variant='h2'>What would you like to do today?</Typography>
      <Box pt={1}>
        <Typography variant='body1'>
          Welcome to Airboxr. Let's start with the task you want to accomplish
          today.
        </Typography>
      </Box>
      <Box pt={8}>
        <Button
          variant='outlined'
          color='primary'
          fullWidth
          onClick={goToSourcesPage}
        >
          Import Data
        </Button>
        <Box mt={1}>
          <Button
            variant='outlined'
            color='secondary'
            fullWidth
            onClick={goToSourcesPage}
          >
            Lookup data
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default HomePage;
