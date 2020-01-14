import { actionTypes } from './../../actions/actionTypes'
import { postsReducer } from './posts'

describe('Posts Reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('should return new state if receiving type', () => {
    const posts = [
      { title: 'Test 1' },
      { title: 'Test 2' },
      { title: 'Test 3' },
    ]
    const newState = postsReducer(undefined, {
      type: actionTypes.GET_POSTS,
      payload: posts,
    })
    expect(newState).toEqual(posts)
  })
})
