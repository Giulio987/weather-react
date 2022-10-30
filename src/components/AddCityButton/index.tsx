import { Button, Typography } from '@mui/material';
import { weatherTheme } from 'modules/mui';
const plusIcon = require('assets/img/Plus.png');

const AddCityButton = () => {
  return (
    <Button
      sx={{
        color: weatherTheme.palette.secondary.main,
        width: '100%',
      }}
    >
      <img alt="icon" src={plusIcon} style={{ paddingRight: '15px' }} />
      <Typography variant={'body2'}>{'Aggiungi città'}</Typography>
    </Button>
  );
};

export default AddCityButton;
