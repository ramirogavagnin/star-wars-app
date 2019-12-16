import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const DetailWrapper = ({ children, matches }) => {
    const useStyles = makeStyles({
        root: {
            backgroundColor: '#CB202D',
            width: matches ? '60%' : '100%',
            position: 'fixed',
            right: matches ? 0 : 'none',
            top: matches ? 0 : 'none',
            bottom: 0,
            height: matches ? '100vh' : '35vh',
            padding: matches ? '12vh 2vw 2vw 2vw' : '0 3vw 3vw 3vw',
        },
        wrap: {
            overflowY: 'scroll',
            height: '100%',
        },
    })

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.wrap}>{children}</div>
        </div>
    )
}

export default DetailWrapper
