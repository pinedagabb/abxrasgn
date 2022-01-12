import React from 'react';
import { useHistory } from 'react-router';

import { Typography } from '@material-ui/core';

import {
    FixedMiddleBodyWithVerticalScroll, FixedTopBar, Navbar, PageContainer, TopbarBackButton
} from './';

interface LayoutProps {
  headerTitle: string;
  subTitle: string;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const history = useHistory();

  const topbarLeftButton: TopbarBackButton = {
    type: 'back',
    onClick: () => history.goBack(),
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <FixedTopBar title={props.headerTitle} leftButton={topbarLeftButton} />
        <FixedMiddleBodyWithVerticalScroll>
          <Typography variant='body1'>{props.subTitle}</Typography>
          {props.children}
        </FixedMiddleBodyWithVerticalScroll>
      </PageContainer>
    </>
  );
};
