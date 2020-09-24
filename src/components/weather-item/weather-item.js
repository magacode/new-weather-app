import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const WeatherItem = ({ weatherData, setIsOpen, setDataModal }) => {
  const { coord, name, main: { temp  } } = weatherData;

  return (
    <ListItem button onClick={() => {
      setIsOpen(true);
      setDataModal({ name, coord })
    }}>
      <ListItemText primary={name} />
        <Chip color="primary" label={Math.round(temp)} />
        &#8451;
      </ListItem>
  )
      
}

export default WeatherItem;