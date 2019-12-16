import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Title = ({ children, matches, style }) => {
    const useStyles = makeStyles({
        title: {
            color: '#fff',
            fontFamily: 'Starwars',
            fontSize: matches ? '6vmin' : '8vmin',
        },
    })
    const classes = useStyles()

    return (
        <h1 className={classes.title} style={style}>
            {children}
        </h1>
    )
}

export default Title
