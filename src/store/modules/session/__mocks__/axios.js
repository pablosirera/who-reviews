export const mockSessions = [
  {
    active: true,
    id: 1,
    name: 'Frontend',
  },
  {
    active: true,
    id: 2,
    name: 'Backend',
  },
]

export default () =>
  Promise.resolve({ data: { data: { session: mockSessions } } })
