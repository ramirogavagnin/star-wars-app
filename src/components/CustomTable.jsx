import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'

import TableRow from '@material-ui/core/TableRow'

const columns = [{ id: 'name', label: 'Name', minWidth: 170 }]

function createData(name, code, population, size) {
    const density = population / size
    return { name, code, population, size, density }
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
]

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    tableWrapper: {
        maxHeight: '100vh',
        overflow: 'auto',
    },
})

export default function StickyHeadTable() {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                style={{
                                    minWidth: 170,
                                    backgroundColor: '#2D2D2D',
                                    zIndex: 0,
                                }}
                            >
                                Nombre
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}
                                    onClick={() => console.log(row.name)}
                                >
                                    {columns.map(column => {
                                        const value = row[column.id]
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.format &&
                                                typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <button
                    style={{
                        margin: '5vmin 2vmin 5vmin 2vmin',
                        alignSelf: 'center',
                    }}
                >
                    Pepe
                </button>
            </div>
        </Paper>
    )
}
