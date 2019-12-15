import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const DetailWrapper = ({ children, matches }) => {
    const useStyles = makeStyles({
        root: {
            backgroundColor: '#CB202D',
            width: matches ? '60%' : '100%',
            position: 'fixed',
            right: matches ? 0 : 'none',
            top: matches ? 0 : 'none',
            bottom: 0,
            height: matches ? '100vh' : '20vh',
            padding: matches ? '10vh 2vw 2vw 2vw' : 0,
        },
    })

    const classes = useStyles()

    return <div className={classes.root}>{children}</div>
}

export default DetailWrapper
