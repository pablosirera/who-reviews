import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MySessions from '@/views/mySessions/MySessions'
import sessionStore from '@/store/modules/session'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MySessions View', () => {
  let actions, store, state

  beforeEach(() => {
    actions = {
      listSessions: jest.fn(),
    }
    state = {
      sessions: null,
    }
    store = new Vuex.Store({
      modules: {
        session: {
          namespaced: true,
          ...sessionStore,
          actions,
          state,
        },
      },
    })
  })

  const build = () => {
    const wrapper = shallowMount(MySessions, {
      store,
      localVue,
    })

    return {
      wrapper,
    }
  }

  it('should get sessions from the store', () => {
    build()
    expect(actions.listSessions).toHaveBeenCalled()
  })

  it('should have two sessions on list', async () => {
    state.sessions = [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
    ]
    const { wrapper } = build()
    await flushPromises()

    const sessions = wrapper.findAll('.sessions-list > li')
    expect(sessions.length).toBe(2)
  })
})
