import { shallowMount } from '@vue/test-utils'
import CreateSessionForm from '../CreateSessionForm.vue'

describe('CreateSession -> CreateSessionForm', () => {
  const build = () => {
    const wrapper = shallowMount(CreateSessionForm)

    return {
      wrapper,
    }
  }

  it('should match snapshot', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should emit event if form is valid', () => {
    const { wrapper } = build()

    const input = wrapper.find('[data-testid="session-name"]')

    input.setValue('name of session')
    wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('submit-form')
    expect(formSubmittedCalls).toHaveLength(1)
  })
})
