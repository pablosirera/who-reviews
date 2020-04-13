import { shallowMount } from '@vue/test-utils'
import TheButton from '@/components/ui/TheButton'

describe('The Button', () => {
  const defaultProps = { text: 'hello' }
  const build = (propsData = defaultProps) => {
    const wrapper = shallowMount(TheButton, {
      propsData,
    })

    return {
      wrapper,
    }
  }

  it('should match snapshot', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should set class w-16 when is small size', () => {
    const { wrapper } = build({ text: 'hello', size: 'small' })
    wrapper.find('[data-testid="the-button"]')
    expect(wrapper.classes()).toContain('w-16')
  })

  it('should set class w-24 when is small size', () => {
    const { wrapper } = build({ text: 'hello', size: 'medium' })
    wrapper.find('[data-testid="the-button"]')
    expect(wrapper.classes()).toContain('w-24')
  })

  it('should set class w-40 when is small size', () => {
    const { wrapper } = build({ text: 'hello', size: 'large' })
    wrapper.find('[data-testid="the-button"]')
    expect(wrapper.classes()).toContain('w-40')
  })
})
