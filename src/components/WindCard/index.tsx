import { Card, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

const WindCard = () => {
  const { cities } = useSelector((state: RootState) => state.weather);
  return (
    <>
      <Card
        sx={{
          flex: 1,
          overflowY: 'scroll',
          height: '100%',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          pt: 2,
          width: '302px',
          minHeight: '400px',
          boxShadow: '5px 10px 20px rgba(0,0,0,0.17)',
        }}
      >
        <Typography
          variant={'subtitle2'}
          fontWeight="bold"
          fontSize="18px"
          textAlign={'center'}
        >
          {'Now'}
        </Typography>
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          disablePadding
        >
          {cities[0].hourlyTemperatures.map(({ temperature, localTime }, i) => (
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
                    width: i === 0 ? '30px' : '20px',
                    height: i === 0 ? '30px' : '20px',
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
                    marginLeft: i === 0 ? '11px' : '6px',
                    marginTop: 2,
                  }}
                />
              </div>

              <Typography
                variant={'subtitle2'}
                fontSize="20px"
                sx={{ width: 58 }}
              >
                {i !== 0 && localTime}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Card>
      <div
        style={{
          position: 'absolute',
          width: '301px',
          height: '43px',
          background:
            'linear-gradient(to bottom, rgba(109,165,241,0), #689CF0)',
          bottom: 0,
          borderRadius: '0px 0px 25px 25px',
        }}
      />
    </>
  );
};

export default WindCard;
