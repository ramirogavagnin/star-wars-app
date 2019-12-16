import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import Fab from '@material-ui/core/Fab'

import TableRow from '@material-ui/core/TableRow'

const CustomTable = ({
    matches,
    data,
    seeMore,
    characters,
    active,
    setActiveItem,
}) => {
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
        backgroundActiveItem: {
            backgroundColor: '#C6C6C6',
        },
        textActiveItem: {
            fontWeight: 'bold',
            fontSize: matches ? '3.5vmin' : '5.5vmin',
        },
        textItem: {
            fontWeight: 'normal',
            fontSize: matches ? '2.5vmin' : '4.5vmin',
        },
    })
    const classes = useStyles()

    const { backgroundActiveItem, textActiveItem, textItem } = classes

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
                                const { name, title, url } = item
                                return (
                                    <TableRow
                                        hover
                                        className={clsx(
                                            active &&
                                                active.url === url &&
                                                backgroundActiveItem
                                        )}
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={url}
                                        onClick={() => setActiveItem(item)}
                                    >
                                        <TableCell
                                            className={clsx(
                                                active && active.url === url
                                                    ? textActiveItem
                                                    : textItem
                                            )}
                                        >
                                            {characters ? name : title}
                                        </TableCell>
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
