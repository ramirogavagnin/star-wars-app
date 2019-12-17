import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import routes from '../../navigation/routes'

import reducers from '../reducers'

const { home } = routes

const INITIAL_STATE = {
    characters: {},
    activeCharacter: {},
    movies: {},
    activeMovie: {},
    searchedCharacter: {},
    searchedMovie: {},
    searchCharacterActive: false,
    searchMovieActive: false,
    isLoading: false,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducers,
    INITIAL_STATE,
    composeEnhancers(applyMiddleware(reduxThunk))
)
