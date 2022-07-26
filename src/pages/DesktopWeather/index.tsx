import {
  Box,
  Card,
  CircularProgress,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import getImageAndStyleFromWeather from 'shared/modules/utilities';

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
              position: 'fixed',
              left: 0,
              top: 130,
              width: '140px',
              height: '280px',
              borderRadius: '0px 25px 25px 0px ',
              ...cities[0].style,
            }}
          >
            {}
          </div>
          <Grid container direction={'column'} spacing={3}>
            <Grid item container direction={'row'}>
              <Grid item sx={{ flex: 1 }}>
                <Card>Turin</Card>
              </Grid>
              <Grid item>
                <List>
                  {cities.map((city, i) => (
                    <div key={city.cityName}>
                      {i !== 0 && (
                        <ListItem sx={{ borderRadius: 2.5, ...city.style }}>
                          <ListItemText>
                            <Typography>{city.cityName}</Typography>
                            <Typography>{'data'}</Typography>
                            <Typography>{'ora'}</Typography>
                          </ListItemText>
                          <Icon></Icon>
                          <Typography color={'white'} fontFamily="PoppinsBold">
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
