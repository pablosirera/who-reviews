import mutations from '../mutations'

describe('store/session/mutations', () => {
  let state

  beforeEach(() => {
    state = {
      sessions: null,
    }
  })

  it('"setSessions" save sessions', () => {
    mutations.setSessions(state, [{}, {}])
    expect(state.sessions.length).toBe(2)
  })
})
