import React from 'react';

import { Box, Button, CircularProgress, IconButton, Typography } from '@material-ui/core';

interface BottomButtonProps {
  processing?: boolean;
  enabled?: boolean;
  onClick: () => void | Promise<void>;
  title: string;
}

export const FixedBottomPominentButton: React.FunctionComponent<BottomButtonProps> =
  (props) => {
    return (
      <Box
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 15,
          height: 50,
          top: 'auto',
          right: 0,
          bottom: 0,
          left: 0,
          position: 'fixed',
        }}
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        {props.processing || false ? (
          <CircularProgress />
        ) : (
          <Button
            style={{ height: 50, width: '100%' }}
            onClick={props.onClick}
            disabled={!props.enabled}
          >
            {props.title}
          </Button>
        )}
      </Box>
    );
  };

export const FixedMiddleBodyWithVerticalScroll: React.FunctionComponent<{}> = (
  props
) => {
  return (
    <Box
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        top: 115,
        right: 0,
        bottom: 65,
        left: 0,
        position: 'fixed',
        overflowY: 'scroll',
      }}
      display='flex'
      flexDirection='column'
    >
      {props.children}
    </Box>
  );
};

export const PageContainer: React.FunctionComponent<{}> = (props) => {
  return (
    <Box display='flex' flexDirection='column' p={2}>
      {props.children}
    </Box>
  );
};
