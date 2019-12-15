import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const TableWrapper = ({ children, matches }) => {
    const useStyles = makeStyles({
        root: {
            width: matches ? '40%' : '100%',
            paddingTop: '9vh',
            marginLeft: 0,
        },
    })

    const classes = useStyles()

    return <div className={classes.root}>{children}</div>
}

export default TableWrapper
