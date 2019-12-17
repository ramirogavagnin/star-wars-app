import React from 'react'

import { connect } from 'react-redux'
import {
    getCharacters,
    setActiveCharacter,
    searchCharacter,
    setSearchCharacterActive,
    handleNavigation,
} from '../redux/actions'

import routes from '../navigation/routes'

import TableWrapper from '../components/TableWrapper'
import DetailWrapper from '../components/DetailWrapper'
import CustomTable from '../components/CustomTable'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Title from '../components/Title'
import Text from '../components/Text'

const { movies } = routes

const Characters = ({
    characters,
    getCharacters,
    activeCharacter,
    setActiveCharacter,
    searchCharacter,
    searchCharacterActive,
    searchedCharacter,
    setSearchCharacterActive,
    handleNavigation,
    history,
}) => {
    const matches = useMediaQuery('(min-width:600px)')

    const handleOnSeeMore = () => {
        if (characters.next) {
            getCharacters(characters.next)
        }
    }

    const { name, height, mass, eye_color, filmsList } = activeCharacter

    return (
        <>
            <Grid item xs={12}>
                <TableWrapper matches={matches}>
                    <CustomTable
                        matches={matches}
                        data={
                            searchCharacterActive
                                ? searchedCharacter
                                : characters
                        }
                        seeMore={handleOnSeeMore}
                        active={activeCharacter}
                        setActiveItem={setActiveCharacter}
                        search={searchCharacter}
                        searchActive={setSearchCharacterActive}
                        isActive={searchCharacterActive}
                        characters
                    />
                </TableWrapper>
            </Grid>
            <Grid item xs={12}>
                <DetailWrapper matches={matches}>
                    {Object.keys(activeCharacter).length > 0 ? (
                        <>
                            <Title matches={matches}>Nombre: {name}</Title>
                            <Text matches={matches}>
                                - Color de ojos: {eye_color}
                            </Text>
                            <Text matches={matches}>- Altura: {height}cm</Text>
                            <Text matches={matches}>- Peso: {mass}kg</Text>
                            {filmsList.length > 0 && (
                                <>
                                    <Text matches={matches}>
                                        - Peliculas en las que apareció:
                                    </Text>
                                    <ul>
                                        {filmsList.map(item => {
                                            const { title, url } = item
                                            return (
                                                <li
                                                    key={url}
                                                    onClick={() =>
                                                        handleNavigation({
                                                            key: movies,
                                                            history,
                                                            item,
                                                        })
                                                    }
                                                    style={{
                                                        color: '#fff',
                                                        textDecoration:
                                                            'underline',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <Text matches={matches}>
                                                        {title}
                                                    </Text>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </>
                            )}
                        </>
                    ) : (
                        <Title
                            matches={matches}
                            style={{ fontSize: '9vmin', textAlign: 'center' }}
                        >
                            Elige un personaje!
                        </Title>
                    )}
                </DetailWrapper>
            </Grid>
        </>
    )
}

const mapStateToProps = state => {
    const {
        characters,
        activeCharacter,
        searchCharacterActive,
        searchedCharacter,
    } = state
    return {
        characters,
        activeCharacter,
        searchCharacterActive,
        searchedCharacter,
    }
}

const mapDispatchToProps = {
    getCharacters,
    setActiveCharacter,
    searchCharacter,
    setSearchCharacterActive,
    handleNavigation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
