import types from '../types'
import _ from 'lodash'
import { contains } from '../../utils/contains'

const reducers = (state, action) => {
    switch (action.type) {
        case types.SET_CHARACTERS:
            if (Object.keys(state.characters).length > 0) {
                let result = []

                _.forEach(action.payload.results, item => {
                    const index = _.findIndex(
                        state.characters.results,
                        characterItem => characterItem.url === item.url
                    )
                    if (index === -1) {
                        result.push(item)
                    }
                })

                const results = _.concat(state.characters.results, result)

                return {
                    ...state,
                    characters: { ...action.payload, results },
                }
            } else {
                return {
                    ...state,
                    characters: action.payload,
                }
            }

        case types.SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
            }

        case types.SET_ACTIVE_CHARACTER:
            return {
                ...state,
                activeCharacter: action.payload,
            }

        case types.SET_ACTIVE_MOVIE:
            return {
                ...state,
                activeMovie: action.payload,
            }

        case types.SET_SEARCH_CHARACTER_ACTIVE:
            return {
                ...state,
                searchCharacterActive: action.payload,
            }

        case types.SET_SEARCH_CHARACTER:
            return {
                ...state,
                searchedCharacter: action.payload,
            }

        case types.SET_SEARCH_MOVIE_ACTIVE:
            return {
                ...state,
                searchMovieActive: action.payload,
            }

        case types.SET_SEARCH_MOVIE:
            const searchResults = _.filter(state.movies.results, item =>
                contains(item, action.payload)
            )

            return {
                ...state,
                searchedMovie: { results: searchResults },
                searchMovieActive: true,
            }

        case types.CLEAR_ACTIVE_CHARACTER:
            return {
                ...state,
                activeCharacter: {},
                searchCharacterActive: false,
            }

        // States
        case types.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        case types.CLEAR_LOADING_PAGE:
            return {
                ...state,
                loadingPage: action.payload,
            }

        default:
            return { ...state }
    }
}

export default reducers
