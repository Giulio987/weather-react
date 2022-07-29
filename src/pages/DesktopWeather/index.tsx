import {
  Box,
  Card,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { weatherTheme } from 'shared/modules/mui';

const DesktopWeather = () => {
  //redux
  const { cities, error, isLoading } = useSelector(
    (state: RootState) => state.weather
  );

  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && !error && cities.length > 0 && (
        <Box px={5} pt={5} pb={4}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'fixed',
              left: 0,
              top: 130,
              width: '140px',
              height: '280px',
              borderRadius: '0px 25px 25px 0px ',
              ...cities[0].style,
            }}
          >
            <Typography variant="h1" ml={'10px'} mb={'33px'}>
              {cities[0].temperature.toFixed() + '°'}
            </Typography>
            <img src={cities[0].image} alt={cities[0].name} />
          </div>
          <Grid container direction={'column'} spacing={3}>
            <Grid item container direction={'row'} spacing={5}>
              <Grid item sx={{ flex: 1 }}>
                <Card
                  sx={{ height: weatherTheme.spacing(44), pt: 8, pl: '146px' }}
                >
                  <Typography variant={'h2'}>{cities[0].name}</Typography>
                  <Typography variant={'body2'} fontWeight="bold">
                    {'Data'}
                  </Typography>
                  <Typography variant={'body2'}>
                    {cities[0].mainWeather === 'Clear'
                      ? 'Sunny'
                      : cities[0].mainWeather}
                  </Typography>
                </Card>
              </Grid>
              <Grid item>
                <List>
                  {cities.map((city, i) => (
                    <div key={city.name}>
                      {i !== 0 && (
                        <ListItem
                          sx={{
                            borderRadius: 2.5,
                            ...city.style,
                            flexDirection: 'row',
                          }}
                        >
                          <ListItemText>
                            <Typography variant="h4">{city.name}</Typography>
                            <Typography>{city.localeDate}</Typography>
                            <Typography>{city.month}</Typography>
                            <Typography>{city.localTime}</Typography>
                          </ListItemText>
                          <img src={city.image} alt={city.name} />
                          <Typography
                            color={'white'}
                            fontWeight="bold"
                            variant={'h1'}
                          >
                            {city.temperature.toFixed() + '°'}
                          </Typography>
                        </ListItem>
                      )}
                    </div>
                  ))}
                </List>
              </Grid>
            </Grid>
            <Grid item container direction={'row'}>
              <Grid item>Wind</Grid>
              <Grid item>ThisWeek</Grid>
              <Grid item>Search</Grid>
              <Grid item>Localization</Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default DesktopWeather;
