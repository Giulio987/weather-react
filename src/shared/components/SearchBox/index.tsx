import { Card, Typography } from '@mui/material';
const searchIcon = require('assets/img/Search-1.png');

const SearchBox = () => {
  return (
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
      <Typography sx={{ flex: 1, pl: 4 }} variant={'h3'} color={'#B8B8B8'}>
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
  );
};

export default SearchBox;
