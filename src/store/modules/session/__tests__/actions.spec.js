import actions from '../actions'
import { mockSessions } from '@/__mocks__/templates/sessions'
import mockAxios from 'axios'

describe('store/session/actions', () => {
  it('should commit all sessions', async () => {
    mockAxios.mockImplementationOnce(() =>
      Promise.resolve({ data: { data: { session: mockSessions } } })
    )

    const commit = jest.fn()
    await actions.listSessions({ commit })
    expect(commit).toHaveBeenCalledWith('setSessions', mockSessions)
  })
})
