import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { clearActiveCharacter } from '../redux/actions'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const SearchInput = ({
    matches,
    search,
    searchActive,
    searchCharacterActive,
    clearActiveCharacter,
}) => {
    const useStyles = makeStyles(theme => ({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: matches ? '22vw' : '55vw',
            height: matches ? '8vh' : '6.5vh',
        },
        input: {
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
    }))
    const classes = useStyles()

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (!inputValue) {
            searchActive(false)
        }

        return () => {
            if (searchCharacterActive) {
                clearActiveCharacter()
            } else {
                searchActive(false)
            }
        }
    }, [inputValue])

    const handleOnSearch = () => {
        if (inputValue) {
            search(inputValue)
        }
    }

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Buscar..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <IconButton
                className={classes.iconButton}
                aria-label="search"
                onClick={handleOnSearch}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

const mapStateToProps = state => {
    const { searchCharacterActive } = state
    return {
        searchCharacterActive,
    }
}

const mapDispatchToProps = {
    clearActiveCharacter,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
