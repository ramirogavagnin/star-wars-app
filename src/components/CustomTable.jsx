import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import Fab from '@material-ui/core/Fab'

import TableRow from '@material-ui/core/TableRow'

const CustomTable = ({ matches, data, seeMore }) => {
    const useStyles = makeStyles({
        root: {
            width: '100%',
            borderRadius: 0,
        },
        tableWrapper: {
            height: matches ? '100vh' : '71vh',
            overflow: 'auto',
        },
        tableHead: {
            minWidth: 170,
            backgroundColor: '#2D2D2D',
            zIndex: 0,
            paddingTop: matches ? 25 : 20,
        },
        buttonContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
        },
        button: {
            width: '60%',
            margin: '5vmin 2vmin 5vmin 2vmin',
        },
    })
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table aria-label="table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>
                                <h3 style={{ color: 'white', margin: 0 }}>
                                    Nombre
                                </h3>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.results &&
                            data.results.map(item => {
                                const { name } = item
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={name}
                                        onClick={() => console.log(name)}
                                    >
                                        <TableCell>{name}</TableCell>
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
                {data.results && (
                    <div className={classes.buttonContainer}>
                        <Fab
                            variant="extended"
                            className={classes.button}
                            onClick={seeMore}
                            disabled={!data.next}
                        >
                            Ver más
                        </Fab>
                    </div>
                )}
            </div>
        </Paper>
    )
}

export default CustomTable
