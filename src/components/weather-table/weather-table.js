import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles,
} from '@material-ui/core';

import { WeatherTableCell } from '../weather-table-cell';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const WeatherTable = ({ weatherCity }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>
                        Дата
                    </TableCell>
                    <TableCell align="right">
                        Температура&nbsp;(ц)
                    </TableCell>
                    <TableCell align="right">
                        Скорость ветра&nbsp;(мс)
                    </TableCell>
                    <TableCell align="right">
                        Атм. давление&nbsp;(мм рт.)
                    </TableCell>
                    <TableCell align="right">
                        Влажноть &nbsp;(%)
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <WeatherTableCell daily={weatherCity.daily} />
                </TableBody>
            </Table>
        </TableContainer>
    );
}
