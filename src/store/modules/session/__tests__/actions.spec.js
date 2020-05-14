import actions from '../actions'
import { mockSessions } from '@/__mocks__/templates/sessions'
import axios from 'axios'

jest.mock('axios', () => {
  return {
    post: jest.fn(),
  }
})

describe('store/session/actions', () => {
  it('should commit all sessions', async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: { data: { session: mockSessions } } })
    )

    const commit = jest.fn()
    await actions.listSessions({ commit })
    expect(commit).toHaveBeenCalledWith('setSessions', mockSessions)
  })
})
