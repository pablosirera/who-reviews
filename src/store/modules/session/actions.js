import axios from 'axios'
const mutations = require('@/graphql/mutations/mutations.graphql')
const queries = require('@/graphql/queries/queries.graphql')

export default {
  async listSessions({ commit }) {
    const result = await axios.post(process.env.VUE_APP_HASURA_GRAPHQL, {
      query: queries.allSessions,
    })
    commit('setSessions', result.data.data.session)
    return result.data.data.session
  },
  async createSession(_, payload) {
    const result = await axios.post(process.env.VUE_APP_HASURA_GRAPHQL, {
      query: mutations.saveSession,
      variables: { session: payload },
    })
    const hasErrors = result.data.errors && result.data.errors.length
    if (!hasErrors) {
      // TODO: show confirm toast
    }
  },
}
