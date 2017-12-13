'use strict'

/**
 * Reducer
 * @ignore
 */
const reducer = {
  type: 'test',
  reducer: (state = {}, event) => ({
    ...state,
    events: [...(state.events || []), event]
  })
}

/**
 * Exports
 * @ignore
 */
module.exports = reducer
