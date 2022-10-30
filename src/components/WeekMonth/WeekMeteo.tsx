import {
  Box,
  Card,
  List,
  ListItem,
  MobileStepper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

interface WeekMeteoProps {
  dailyWeather: {
    main: string;
    temperature: number;
    localeDate: string;
    image: string;
  }[][];
  activeStep: number;
  maxSteps: number;
}

const WeekMeteo = ({ dailyWeather, activeStep, maxSteps }: WeekMeteoProps) => {
  return (
    <>
      <List component={Stack} direction="row" sx={{ flex: 1, px: 3, py: 2 }}>
        {dailyWeather.map((cityWeather, i) => (
          <React.Fragment key={'key__i=' + i + Math.random()}>
            {activeStep === i && (
              <ListItem
                key={cityWeather[0] + 'i_' + Math.random()}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
                disablePadding
              >
                {dailyWeather[i].map((daily, j) => (
                  <Card
                    key={daily.localeDate + Math.random()}
                    elevation={4}
                    sx={{
                      maxHeight: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignSelf: 'stretch',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      p: 3,
                      background: 'rgba(255,255,255,0.1)',
                      mr: j !== 2 ? 3 : 0,
                      width: '148px',
                    }}
                  >
                    <Typography sx={{ pt: 2 }} variant="body1">
                      {daily.localeDate}
                    </Typography>
                    <Typography variant="h3" fontSize={'42px'}>
                      {daily.temperature.toFixed()}°
                    </Typography>
                    <Box
                      sx={{
                        width: 84,
                        height: 84,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <img src={daily.image} alt="weather" style={{}} />
                    </Box>
                  </Card>
                ))}
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        sx={{
          background: 'transparent',
          justifyContent: 'center',
          '& .MuiMobileStepper-dot': {
            backgroundColor: 'rgba(255, 255, 255, 0.37)',
          },
          '& .MuiMobileStepper-dotActive': {
            backgroundColor: 'white',
          },
        }}
        activeStep={activeStep}
        nextButton={<></>}
        backButton={<></>}
      />
    </>
  );
};

export default WeekMeteo;
