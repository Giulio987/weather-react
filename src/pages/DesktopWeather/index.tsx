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
import { weatherTheme } from 'shared/modules/mui';
import { getArrayOfTabs } from 'shared/modules/utilities';
const plusIcon = require('assets/img/Plus.png');
const searchIcon = require('assets/img/Search-1.png');
const locationIcon = require('assets/img/Location.png');

const DesktopWeather = () => {
  //redux
  const { cities, error, isLoading } = useSelector(
    (state: RootState) => state.weather
  );
  //Tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const dailyWeather = React.useMemo(() => getArrayOfTabs(cities[0]), [cities]);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = dailyWeather.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //Swipe
  const handlers = useSwipeable({
    //TODO swiper per desktop
    onSwiped: (eventData) => {
      if (eventData.dir === 'Left') {
        handleNext();
      }
      if (eventData.dir === 'Right') {
        handleBack();
      }
    },
  });
  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && !error && cities.length > 0 && dailyWeather && (
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: 0,
              top: 130,
              width: '140px',
              height: '280px',
              borderRadius: '0px 25px 25px 0px ',
              ...cities[0].mainWeather.style,
            }}
          >
            <Typography variant="h1" ml={'10px'} mb={'33px'}>
              {cities[0].mainWeather.temperature.toFixed() + '°'}
            </Typography>
            <img src={cities[0].mainWeather.image} alt={cities[0].name} />
          </div>
          <Grid container direction={'column'} spacing={3}>
            <Grid item container direction={'row'} spacing={5}>
              <Grid item sx={{ flex: 1, display: 'flex', height: 490 }} xs={7}>
                <Card
                  sx={{
                    maxHeight: '100%',
                    flex: 1,
                    pt: 8,
                    pl: '146px',
                  }}
                >
                  <Typography variant={'h2'} sx={{ pb: 1 }}>
                    {cities[0].name}
                  </Typography>
                  <Typography variant={'body2'} fontWeight="400" sx={{ pb: 2 }}>
                    {cities[0].mainWeather.localeDate}
                  </Typography>
                  <Typography variant={'body2'} sx={{ fontWeight: '300' }}>
                    {cities[0].mainWeather.main === 'Clear'
                      ? 'Sunny'
                      : cities[0].mainWeather.main}
                  </Typography>
                </Card>
              </Grid>
              <Grid item sx={{ flex: 1 }} xs={5}>
                <Button
                  /*startIcon={''} */
                  sx={{
                    color: weatherTheme.palette.secondary.main,
                    width: '100%',
                  }}
                >
                  <img
                    alt="icon"
                    src={plusIcon}
                    style={{ paddingRight: '15px' }}
                  />
                  <Typography variant={'body2'}>{'Aggiungi città'}</Typography>
                </Button>
                <List disablePadding>
                  {cities.map((city, i) => (
                    <div key={city.name}>
                      {i !== 0 && (
                        <Card
                          sx={{
                            p: 2,
                            pr: 2.5,
                            my: 2,
                            borderRadius: '25px',
                            ...city.mainWeather.style,
                            flexDirection: 'row',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Box
                            sx={{ display: 'flex', flexDirection: 'column' }}
                          >
                            <Typography variant="h4">{city.name}</Typography>
                            <Typography
                              variant="subtitle1"
                              sx={{ maxWidth: '100px' }}
                            >
                              {city.mainWeather.localeDate}
                            </Typography>
                            <Typography variant="subtitle2">
                              {city.mainWeather.localTime}
                            </Typography>
                          </Box>
                          <img src={city.mainWeather.image} alt={city.name} />
                          <Typography variant={'h1'}>
                            {city.mainWeather.temperature.toFixed() + '°'}
                          </Typography>
                        </Card>
                      )}
                    </div>
                  ))}
                </List>
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
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Typography
                  p={2}
                  variant={'h3'}
                  color={weatherTheme.palette.secondary.main}
                >
                  {'Today'}
                </Typography>
                <Card
                  sx={{
                    flex: 1,
                    maxHeight: 'calc(100vh - 632.67px)',
                    overflowY: 'scroll',
                    height: '100%',
                    '& ::-webkit-scrollbar': {
                      display: 'none',
                    },
                  }}
                >
                  <List
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {cities[0].hourlyTemperatures.map(
                      ({ temperature, localTime }) => (
                        <ListItem
                          key={localTime + temperature + Math.random()}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            position: 'relative',
                          }}
                        >
                          <Typography
                            variant={'subtitle2'}
                            fontSize="30px"
                            sx={{ width: 50 }}
                          >
                            {temperature.toFixed() + '°'}
                          </Typography>
                          <div style={{ position: 'relative' }}>
                            <div
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                              }}
                            />
                            <div
                              style={{
                                borderLeft: '8px solid white',

                                height: '60px',
                                position: 'absolute',
                                top: '8px',
                                marginLeft: '6px',
                              }}
                            />
                          </div>
                          <Typography
                            variant={'subtitle2'}
                            fontSize="20px"
                            sx={{ width: 58 }}
                          >
                            {localTime}
                          </Typography>
                        </ListItem>
                      )
                    )}
                  </List>
                </Card>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  sx={{
                    // borderRadius: '35px',
                    '& .Mui-selected': {
                      backgroundColor: weatherTheme.palette.primary.main,
                      color: 'white',
                    },
                  }}
                >
                  <Tab label="This week"></Tab>
                  <Tab label="This month"></Tab>
                </Tabs>
                <Card
                  sx={{
                    flex: 1,
                    maxHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'grab',
                  }}
                  {...handlers}
                >
                  {value === 0 && (
                    <List component={Stack} direction="row" sx={{ flex: 1 }}>
                      {dailyWeather.map((cityWeather, i) => (
                        <>
                          {activeStep === i && (
                            <ListItem
                              key={cityWeather[0] + 'i_' + Math.random()}
                              sx={{ justifyContent: 'space-between' }}
                            >
                              {dailyWeather[i].map((daily) => (
                                <Card
                                  key={daily.localeDate + Math.random()}
                                  sx={{
                                    maxHeight: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignSelf: 'stretch',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                    p: 3,
                                    background: 'transparent',

                                    width: '150px',
                                  }}
                                >
                                  <Typography sx={{ pt: 2 }} variant="body1">
                                    {daily.localeDate}
                                  </Typography>
                                  <Typography variant="h3" fontSize={'42px'}>
                                    {daily.temperature.toFixed()}°
                                  </Typography>
                                  <img src={daily.image} alt="weather" />
                                </Card>
                              ))}
                            </ListItem>
                          )}
                        </>
                      ))}
                    </List>
                  )}
                  <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="dots"
                    sx={{ background: 'transparent' }}
                    activeStep={activeStep}
                    nextButton={<Button />}
                    backButton={<Button />}
                  />
                </Card>
              </Grid>
              <Grid
                item
                container
                xs={4}
                direction="column"
                justifyContent={'space-between'}
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
                  <Card
                    sx={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      background: 'white',
                      '& > .MuiPaper-root:hover': {
                        opacity: 0.8,
                      },
                      '& > .MuiPaper-root:selected': {
                        opacity: 0.8,
                      },
                    }}
                  >
                    <Typography
                      sx={{ flex: 1, pl: 4 }}
                      variant={'h3'}
                      color={'#B8B8B8'}
                    >
                      {'ex: Miami'}
                    </Typography>
                    <Card
                      style={{
                        alignSelf: 'stretch',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        padding: '16px',
                        border: 0,
                      }}
                    >
                      <img src={searchIcon} alt="search" />
                    </Card>
                  </Card>
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
                  <Card
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      flex: 1,
                    }}
                  >
                    <img src={locationIcon} alt={'location-icon'}></img>
                    <Typography variant={'h3'} px={2}>
                      {'Add localization'}
                    </Typography>
                  </Card>
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
