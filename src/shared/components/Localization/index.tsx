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
