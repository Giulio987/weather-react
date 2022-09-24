import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
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
/*
 * TODO Sistemare ancora di più il responsive
 * TODO sistemare react memorized components
 */
const DesktopWeather = () => {
  //redux
  const { cities, error } = useSelector((state: RootState) => state.weather);
  const meteoCardsBreakpoint = useMediaQuery('(max-width:990px)');
  const windCardBreakpoint = useMediaQuery('(max-width:1029px)');
  return (
    <>
      {!error && cities.length > 0 && (
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
            {/**NOTE PRIMA RIGA */}
            <Grid item container direction={'row'} spacing={5}>
              <Grid item sx={{ flex: 2, display: 'flex', height: 490 }}>
                <CityBigCard city={cities[0]} />
              </Grid>
              <Grid item sx={{ flex: meteoCardsBreakpoint ? 1 : 0 }}>
                <AddCityButton />
                <MeteoListCards />
              </Grid>
            </Grid>
            {/**NOTE SECONDA RIGA */}
            <Grid
              item
              container
              direction={'row'}
              spacing={5}
              sx={{ position: 'relative' }}
            >
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  flex: 1,
                  alignItems: 'center',
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
                sx={{
                  display: 'flex',
                  flex: 1,
                }}
              >
                <WeekMonth />
              </Grid>

              <Grid
                item
                sx={{ flex: 1 }}
                container
                direction="column"
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Grid
                  item
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}
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
