import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Text = ({ children, matches }) => {
    const useStyles = makeStyles({
        text: {
            color: '#fff',
            fontFamily: 'Starwars',
            fontSize: matches ? '3.2vmin' : '3.7vmin',
        },
    })
    const classes = useStyles()

    return <h3 className={classes.text}>{children}</h3>
}

export default Text
