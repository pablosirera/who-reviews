import actions from '../actions'
import { mockSessions } from '../__mocks__/axios'

describe('store/session/actions', () => {
  it('should commit all sessions', async () => {
    const commit = jest.fn()
    await actions.listSessions({ commit })
    expect(commit).toHaveBeenCalledWith('setSessions', mockSessions)
  })
})
