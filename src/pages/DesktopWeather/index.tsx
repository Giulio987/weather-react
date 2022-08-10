import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
  MobileStepper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSwipeable } from 'react-swipeable';
import { RootState } from 'redux/reducers';
import AddCityButton from 'shared/components/AddCityButton';
import CityBigCard from 'shared/components/CityBigCard';
import LeftCityMeteo from 'shared/components/LeftCityMeteo';
import Localization from 'shared/components/Localization';
import MeteoListCards from 'shared/components/MeteoListCards';
import SearchBox from 'shared/components/SearchBox';
import WeekMonth from 'shared/components/WeekMonth';
import WindCard from 'shared/components/WindCard';
import { weatherTheme } from 'shared/modules/mui';
import { getArrayOfTabs } from 'shared/modules/utilities';

const DesktopWeather = () => {
  //redux
  const { cities, error, isLoading } = useSelector(
    (state: RootState) => state.weather
  );

  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && !error && cities.length > 0 && (
        <Box
          px={5}
          pt={5}
          pb={4}
          sx={{
            height: '100vh',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <LeftCityMeteo city={cities[0]} />
          <Grid container direction={'column'} spacing={3}>
            <Grid item container direction={'row'} spacing={5}>
              <Grid item sx={{ flex: 1, display: 'flex', height: 490 }} xs={8}>
                <CityBigCard city={cities[0]} />
              </Grid>
              <Grid item sx={{ flex: 1 }} xs={4}>
                <AddCityButton />
                <MeteoListCards />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction={'row'}
              spacing={5}
              sx={{ flex: 1, position: 'relative' }}
            >
              <Grid
                item
                xs={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: '230px',
                  position: 'relative',
                }}
              >
                <Typography
                  p={2}
                  variant={'h3'}
                  color={weatherTheme.palette.secondary.main}
                >
                  {'Today'}
                </Typography>
                <WindCard />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: 'flex',
                  minWidth: '620px',
                }}
                direction={'column'}
              >
                <WeekMonth />
              </Grid>
              <Grid
                item
                container
                xs={3}
                direction="column"
                justifyContent={'space-between'}
                minWidth={'320px'}
              >
                <Grid
                  item
                  sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}
                >
                  <Typography
                    p={2}
                    variant={'h3'}
                    color={weatherTheme.palette.secondary.main}
                  >
                    {'Search'}
                  </Typography>
                  <SearchBox />
                </Grid>
                <Grid
                  item
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}
                >
                  <Typography
                    p={2}
                    variant={'h3'}
                    color={weatherTheme.palette.secondary.main}
                  >
                    {'Localization'}
                  </Typography>
                  <Localization />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default DesktopWeather;
