import { Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

type Props = {};

const DesktopWeather = (props: Props) => {
  return (
    <Box px={5} pt={5} pb={4}>
      <List>
        <ListItem>
          <ListItemText primary="Weather" secondary="" />
        </ListItem>
      </List>
    </Box>
  );
};

export default DesktopWeather;
