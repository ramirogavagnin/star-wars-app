import types from '../types'
import _ from 'lodash'

const reducers = (state, action) => {
    switch (action.type) {
        case types.SET_PAGE:
            return {
                ...state,
                activePage: action.payload,
            }

        case types.SET_CHARACTERS:
            if (Object.keys(state.characters).length > 0) {
                const results = _.concat(
                    state.characters.results,
                    action.payload.results
                )
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

        default:
            return { ...state }
    }
}

export default reducers
