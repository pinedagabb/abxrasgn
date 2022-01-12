import React from 'react';

import { Box, IconButton, Typography } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';

export interface TopbarBackButton {
  type: 'back';
  onClick: () => void | Promise<void>;
}

interface TopBarProps {
  leftButton?: TopbarBackButton;
  title: string;
}

export const FixedTopBar: React.FunctionComponent<TopBarProps> = (props) => {
  return (
    <Box
      style={{
        paddingRight: 15,
        bottom: 'auto',
        position: 'fixed',
        height: 60,
        top: 45,
      }}
      pt={1}
      display='flex'
      flexDirection='row'
      alignItems='center'
    >
      {props.leftButton ? (
        <IconButton
          edge='start'
          color='secondary'
          aria-label='menu'
          onClick={props.leftButton.onClick}
        >
          <ArrowBack />
        </IconButton>
      ) : undefined}
      <Typography variant='h2'>{props.title}</Typography>
    </Box>
  );
};
