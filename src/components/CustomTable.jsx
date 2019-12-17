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

import Title from './Title'
import SearchInput from './SearchInput'

const CustomTable = ({
    matches,
    data,
    seeMore,
    characters,
    active,
    setActiveItem,
    search,
    searchActive,
    isActive,
}) => {
    const useStyles = makeStyles({
        root: {
            width: '100%',
            borderRadius: 0,
        },
        tableWrapper: {
            height: matches ? '100vh' : '100%',
            overflow: 'auto',
        },
        tableHead: {
            minWidth: 170,
            backgroundColor: '#2D2D2D',
            zIndex: 0,
            paddingTop: matches ? 25 : 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
                                    {characters ? 'Personajes' : 'Películas'}
                                </h3>
                                <SearchInput
                                    matches={matches}
                                    search={search}
                                    searchActive={searchActive}
                                />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(data).length > 0 &&
                        data.results.length > 0 ? (
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
                            })
                        ) : (
                            <TableRow>
                                <TableCell
                                    style={{ borderBottomColor: 'transparent' }}
                                >
                                    <Title
                                        matches={matches}
                                        style={{
                                            fontSize: '4vmin',
                                            textAlign: 'center',
                                            color: '#000000',
                                            padding: '2vmin',
                                        }}
                                    >
                                        No hay{' '}
                                        {characters
                                            ? 'Personajes'
                                            : 'Películas'}{' '}
                                        disponibles
                                    </Title>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                {characters &&
                    Object.keys(data).length > 0 &&
                    data.results.length > 0 &&
                    !isActive && (
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
