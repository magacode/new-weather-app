import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

import createDate from '../../utils/date-format';

export const WeatherTableCell = ({ daily }) => (
    <>
        {daily?.map((item) => {
            const { dt, temp, wind_speed, pressure, humidity } = item;

            return (
                <TableRow key={dt}>
                    <TableCell component="th" scope="row">
                        {createDate(dt)}
                    </TableCell>
                    <TableCell align="right">
                        {temp.day}
                    </TableCell>
                    <TableCell align="right">
                        {wind_speed}
                    </TableCell>
                    <TableCell align="right">
                        {pressure}
                    </TableCell>
                    <TableCell align="right">
                        {humidity}
                    </TableCell>               
                </TableRow>
                )
            })
        }
    </>
)