import { shallowMount } from '@vue/test-utils'
import Home from '../Home.vue'
import { ROUTES_PATH } from '@/constants/routes'

describe('Home View', () => {
  let $router

  function createWrapper() {
    return shallowMount(Home, {
      mocks: {
        $t: () => {},
        $router,
      },
    })
  }

  beforeEach(() => {
    $router = {
      push: jest.fn(),
    }
  })

  it('should have button when component is created', () => {
    const wrapper = createWrapper()
    const button = wrapper.find('button')
    expect(button.exists()).toBeTruthy()
  })

  it('should go to create session route when button is clicked', () => {
    const wrapper = createWrapper()
    const button = wrapper.find('button')
    button.trigger('click')
    expect($router.push).toHaveBeenCalledWith({
      name: ROUTES_PATH.CREATE_SESSION.name,
    })
  })
})
