import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function ResultsTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Domain</TableCell>
                        <TableCell align="right">Valid</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">AnyMX</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.results.map((row) => (
                        <TableRow key={row.domain}>
                            <TableCell component="th" scope="row">
                                {row.domain}
                            </TableCell>
                            <TableCell align="right">{row.valid.toString()}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.any_mx}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ResultsTable