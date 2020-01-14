import { actionTypes } from './../../actions/actionTypes'

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return action.payload
    default:
      return state
  }
}
