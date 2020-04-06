import axios from 'axios'

export default {
  async listSessions({ commit }) {
    const result = await axios({
      url: 'https://who-reviews.herokuapp.com/v1/graphql',
      method: 'post',
      data: {
        query: `
        query AllSessions {
          session {
            id
            name
            active
          }
        }
      `,
      },
    })
    commit('setSessions', result.data.data.session)
    return result.data.data.session
  },
}
