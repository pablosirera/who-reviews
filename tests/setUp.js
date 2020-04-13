import { config } from '@vue/test-utils'

jest.mock('@/i18n')
config.mocks['$t'] = key => key
config.mocks['_t'] = key => key
config.mocks['t'] = key => key
config.mocks['$n'] = key => key
config.mocks['n'] = key => key
