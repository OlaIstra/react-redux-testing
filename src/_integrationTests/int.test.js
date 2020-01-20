import moxios from 'moxios'
import { testStore } from '../../utils/utils'
import { fetchPosts } from '../actions'

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Test title 1',
        body: 'TEst text',
      },
      {
        title: 'Test title 2',
        body: 'TEst text',
      },
      {
        title: 'Test title 3',
        body: 'TEst text',
      },
    ]

    const store = testStore()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: expectedState,
      })
    })

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState()
      expect(newState.posts).toBe(expectedState)
    })
  })
})
