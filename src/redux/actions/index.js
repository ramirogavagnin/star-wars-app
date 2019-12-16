import types from '../types'
import { get } from '../../utils/requests'
import { endpoints } from '../../utils/api'
// import { post, getWithId } from '../../utils/requests'

const { characters, films } = endpoints

//Actions

export const setCharacters = payload => ({
    type: types.SET_CHARACTERS,
    payload: payload,
})

export const setMovies = payload => ({
    type: types.SET_MOVIES,
    payload: payload,
})

export const setActiveCharacter = payload => ({
    type: types.SET_ACTIVE_CHARACTER,
    payload: payload,
})

export const setActiveMovie = payload => ({
    type: types.SET_ACTIVE_MOVIE,
    payload: payload,
})

export const handleNavigation = payload => {
    return dispatch => {
        const { key, history } = payload
        history.push(key)
    }
}

// States

export const setIsLoading = payload => ({
    type: types.IS_LOADING,
    payload,
})

// Async Actions

export const getCharacters = payload => {
    return async dispatch => {
        try {
            dispatch(setIsLoading(true))
            const getCharacters = payload
                ? await get(payload)
                : await get(characters)
            const { data, error } = getCharacters
            if (!error) {
                const results = data.results.map(item => {
                    return { ...item, filmsList: [] }
                })
                results.map(async item => {
                    const { films, filmsList } = item
                    if (films.length > 0) {
                        for (let film of films) {
                            const response = await fetch(film)
                            if (response.ok) {
                                const filmData = await response.json()
                                filmsList.push(filmData)
                            }
                        }
                    }
                })

                data.results = results

                if (payload) {
                    dispatch(setCharacters(data))
                    dispatch(setIsLoading(false))
                } else {
                    // Si no hay payload es mi petición inicial, entonces => movies
                    const getMovies = await get(films)
                    if (!getMovies.error) {
                        dispatch(setMovies(getMovies.data))
                        dispatch(setCharacters(data))
                        dispatch(setIsLoading(false))
                    } else {
                        dispatch(setCharacters(data))
                        dispatch(setIsLoading(false))
                    }
                }
            } else {
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            dispatch(setIsLoading(false))
        }
    }
}
