import { Box, Card, Tab, Tabs } from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSwipeable } from 'react-swipeable';
import { RootState } from 'redux/reducers';
import { getArrayOfTabs } from 'shared/modules/utilities';
import WeekMeteo from './WeekMeteo';

const WeekMonth = () => {
  const { cities, error, isLoading } = useSelector(
    (state: RootState) => state.weather
  );
  const dailyWeather = React.useMemo(() => getArrayOfTabs(cities[0]), [cities]);
  //Stepper
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = useMemo(() => dailyWeather.length, [dailyWeather]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === maxSteps - 1) {
        return maxSteps - 1;
      }
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) {
        return 0;
      }
      return prevActiveStep - 1;
    });
  };
  //Swipe
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === 'Left') {
        handleNext();
      }
      if (eventData.dir === 'Right') {
        handleBack();
      }
    },
    ...{
      trackMouse: true,
    },
  });
  //Tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      component="div"
      sx={{
        background: 'linear-gradient(to right bottom, #5374E7, #77B9F5)',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        borderTopLeftRadius: '25px',
        minWidth: '470px',
        maxWidth: 565,
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
          sx={{
            borderTopRightRadius: '25px',
            borderTopLeftRadius: '25px',
            background: 'white',
            '& .Mui-selected': {
              color: 'white !important',
              background: '#5374E7',
            },
            '& .MuiTab-root:not(.Mui-selected)': {
              background: 'transparent !important',
            },
            zIndex: 3,
          }}
        >
          <Tab
            sx={{
              borderTopLeftRadius: '25px',
              borderTopRightRadius: '25px',
            }}
            label="This week"
          ></Tab>
          <Tab
            label="This month"
            sx={{
              borderTopRightRadius: '25px',
              borderTopLeftRadius: '25px',
            }}
          ></Tab>
        </Tabs>
        <div
          style={{
            flex: 2,
            background: '#F1F1F1',
            position: 'absolute',
            width: '85%',
            right: 0,
            height: '48px',
            zIndex: 1,
          }}
        ></div>
      </Box>

      <Box sx={{ display: 'flex', flex: 1, background: '#F1F1F1' }}>
        <Card
          sx={{
            flex: 1,
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'grab',
            userSelect: 'none',
            borderRadius: '0px 25px 25px 25px',
          }}
          {...handlers}
        >
          {value === 0 && (
            <WeekMeteo
              dailyWeather={dailyWeather}
              activeStep={activeStep}
              maxSteps={maxSteps}
            />
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default WeekMonth;
