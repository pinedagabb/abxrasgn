import React from 'react';
import { useHistory } from 'react-router';

import { Box, Button, IconButton, makeStyles } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '4px',
    paddinng: '4px 8px',
    fontSize: '12px',
  },
}));

export const Navbar: React.FunctionComponent<{}> = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const goToHome = () => {
    history.push('/');
  };

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      bgcolor='lightgray'
      style={{
        top: 0,
        height: 45,
        position: 'fixed',
        width: '100%',
      }}
    >
      <IconButton onClick={goToHome}>
        <HomeIcon />
      </IconButton>
      <Box pr={1}>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
        >
          <Box alignItems='center' display='flex'>
            <Box display='inline' pr={0.5}>
              <ChatIcon fontSize='small' />
            </Box>
            Chat
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
