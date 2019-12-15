import types from '../types'
import _ from 'lodash'

const reducers = (state, action) => {
    switch (action.type) {
        case types.SET_CHARACTERS:
            if (Object.keys(state.characters).length > 0) {
                const results = _.concat(
                    state.characters.results,
                    action.payload.results
                )
                return {
                    ...state,
                    characters: { ...action.payload, results },
                    isLoading: false,
                }
            } else {
                return {
                    ...state,
                    characters: action.payload,
                    isLoading: false,
                }
            }

        // States
        case types.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return { ...state }
    }
}

export default reducers
