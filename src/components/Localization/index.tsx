import { Card, Typography } from '@mui/material';
const locationIcon = require('assets/img/Location.png');

const Localization = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        width: 370,
        minHeight: 140,
        boxShadow: '5px 10px 20px rgba(0,0,0,0.17)',
      }}
    >
      <img src={locationIcon} alt={'location-icon'}></img>
      <Typography variant={'h3'} px={2}>
        {'Add localization'}
      </Typography>
    </Card>
  );
};

export default Localization;
