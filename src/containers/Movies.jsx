import React from 'react'

import { connect } from 'react-redux'
import { setActiveMovie } from '../redux/actions'

import TableWrapper from '../components/TableWrapper'
import DetailWrapper from '../components/DetailWrapper'
import CustomTable from '../components/CustomTable'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Title from '../components/Title'
import Text from '../components/Text'

const Movies = ({ movies, activeMovie, setActiveMovie }) => {
    const matches = useMediaQuery('(min-width:600px)')

    const { title, director, producer, release_date } = activeMovie

    return (
        <>
            <Grid item xs={12}>
                <TableWrapper matches={matches}>
                    <CustomTable
                        matches={matches}
                        data={movies}
                        active={activeMovie}
                        setActiveItem={setActiveMovie}
                    />
                </TableWrapper>
            </Grid>
            <Grid item xs={12}>
                <DetailWrapper matches={matches}>
                    {Object.keys(activeMovie).length > 0 ? (
                        <>
                            <Title matches={matches}>Titulo: {title}</Title>
                            <Text matches={matches}>
                                - Director: {director}
                            </Text>
                            <Text matches={matches}>
                                - Productor: {producer}
                            </Text>
                            <Text matches={matches}>
                                - Fecha de estreno: {release_date}
                            </Text>
                        </>
                    ) : (
                        <Title
                            matches={matches}
                            style={{ fontSize: '9vmin', textAlign: 'center' }}
                        >
                            Elige un película!
                        </Title>
                    )}
                </DetailWrapper>
            </Grid>
        </>
    )
}

const mapStateToProps = state => {
    const { movies, activeMovie } = state
    return {
        movies,
        activeMovie,
    }
}

const mapDispatchToProps = {
    setActiveMovie,
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
