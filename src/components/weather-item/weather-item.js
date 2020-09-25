import React, { useCallback } from 'react';
import { ListItem, ListItemText, Chip } from '@material-ui/core';

export const WeatherItem = ({ weather, onOpen }) => {
    const { coord, name, main } = weather

    const handleOpened = useCallback(() => {
        onOpen({ coord, name })
    }, [coord, name, onOpen])

    return (
        <ListItem onClick={handleOpened} button>
            <ListItemText primary={name} />
                <Chip color="primary" label={Math.round(main.temp)} />
                &#8451;
        </ListItem>
    )
}
