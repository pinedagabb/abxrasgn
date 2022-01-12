import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import {
    Box, IconButton, ImageList, ImageListItem, ImageListItemBar, makeStyles
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

import { Layout, LoadingGrid } from '../components';
import { DataStoreApi, SourceData } from '../services/DataStoreApi';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'gray',
  },
  titleBar: {
    backgroundColor: 'transparent',
  },
}));

const SelectSourcePage = () => {
  const [sources, setSources] = useState([] as SourceData[]);
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const toggleFavorite = (source: SourceData) => {
    const isFavorite = !source.isFavorite;
    setSources((prevList) => {
      const newList = prevList.filter((src) => src.id !== source.id);
      localStorage.setItem(String(source.id), String(isFavorite));
      if (isFavorite) {
        return [{ ...source, isFavorite }, ...newList];
      } else {
        return [...newList, { ...source, isFavorite }];
      }
    });
  };

  const getLogo = (sourceName: string): string => {
    return sourceName.toLowerCase().replace(' ', '-') + '-logo.png';
  };

  const goToSourceDetails = (source: SourceData) => {
    history.push({
      pathname: `/source-tables/${source.id}`,
      state: { source: source },
    });
  };

  useEffect(() => {
    setIsLoading(true);
    DataStoreApi.getAll().then((sourceList: SourceData[]) => {
      const sourceListSorted: SourceData[] = [];
      sourceList.forEach((sourceData: SourceData) => {
        if (localStorage.getItem(String(sourceData.id)) === 'true') {
          sourceData.isFavorite = true;
          sourceListSorted.unshift(sourceData);
        } else {
          sourceListSorted.push(sourceData);
        }
      });

      setIsLoading(false);
      setSources(sourceListSorted);
    });
  }, []);

  return (
    <Layout
      headerTitle='Select source.'
      subTitle='Below is a list of the sources you have connected. Please choose the data source you would like to import data from.'
    >
      {isLoading && (
        <Box mt={8}>
          <LoadingGrid />
        </Box>
      )}
      <ImageList
        style={{
          width: '100%',
          marginTop: 50,
        }}
        rowHeight={120}
        gap={1}
      >
        {sources.map((source) => {
          return (
            <ImageListItem
              key={source.id}
              className='cursor-pointer'
              onClick={() => goToSourceDetails(source)}
            >
              <Box
                bgcolor='#fafafa'
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ height: '100%' }}
              >
                <img
                  src={getLogo(source.name)}
                  width={40}
                  alt={source.name}
                  loading='lazy'
                  style={{
                    filter: 'grayscale(100%)',
                  }}
                />
              </Box>

              <ImageListItemBar
                style={{
                  background: 'transparent',
                }}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                title={source.name}
                position='top'
              />
              <ImageListItemBar
                style={{
                  background: 'transparent',
                }}
                actionIcon={
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(source);
                    }}
                  >
                    {source.isFavorite ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                }
                actionPosition='right'
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Layout>
  );
};

export default SelectSourcePage;
