import types from '../types'
import { get } from '../../utils/requests'
import { endpoints } from '../../utils/api'
// import { post, getWithId } from '../../utils/requests'

const { characters, films } = endpoints

//Actions

export const setPage = payload => ({
    type: types.SET_PAGE,
    payload: payload,
})

export const setCharacters = payload => ({
    type: types.SET_CHARACTERS,
    payload: payload,
})

export const handleNavigation = payload => {
    return dispatch => {
        const { key, history } = payload
        dispatch(setPage(key))
        history.push(`/${key}`)
    }
}

// Async Actions

export const getCharacters = payload => {
    return async dispatch => {
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
            dispatch(setCharacters(data))
        }
    }
}
