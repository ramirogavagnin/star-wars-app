import React from 'react'

import { connect } from 'react-redux'
import { getCharacters } from '../redux/actions'

import TableWrapper from '../components/TableWrapper'
import DetailWrapper from '../components/DetailWrapper'
import CustomTable from '../components/CustomTable'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Characters = ({ characters, getCharacters }) => {
    const matches = useMediaQuery('(min-width:600px)')

    const handleOnSeeMore = () => {
        if (characters.next) {
            getCharacters(characters.next)
        }
    }

    return (
        <>
            <Grid item xs={12}>
                <TableWrapper matches={matches}>
                    <CustomTable
                        matches={matches}
                        data={characters}
                        seeMore={handleOnSeeMore}
                    />
                </TableWrapper>
            </Grid>
            <Grid item xs={12}>
                <DetailWrapper matches={matches}>
                    <p style={{ color: 'white' }}>pepe</p>
                </DetailWrapper>
            </Grid>
        </>
    )
}

const mapStateToProps = state => {
    const { characters } = state
    return {
        characters,
    }
}

const mapDispatchToProps = {
    getCharacters,
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
