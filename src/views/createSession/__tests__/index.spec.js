import sessionStore from '@/store/modules/session'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import CreateSession from '../index.vue'
import Vuex from 'vuex'

describe('Create Session View', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  let actions, store

  const build = () => {
    const wrapper = shallowMount(CreateSession, {
      localVue,
      store,
    })

    return {
      wrapper,
    }
  }

  beforeEach(() => {
    actions = {
      createSession: jest.fn(),
    }
    store = new Vuex.Store({
      modules: {
        session: {
          namespaced: true,
          ...sessionStore,
          actions,
        },
      },
    })
  })

  it('should call to createSession action when form is submitted', () => {
    const { wrapper } = build()

    wrapper.vm.sendCreateSession()

    expect(actions.createSession).toHaveBeenCalledTimes(1)
  })
})
