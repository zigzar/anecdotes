import axios from 'axios'

export const state = () => ({
  jokes: [],
  jokesLimit: 10,
})

export const getters = {
  getJokes() {
    return state.jokes
  },
}

export const mutations = {
  setJokes(state, payload) {
    state.jokes = payload
  },
}

export const actions = {
  async fetch({ state, commit }) {
    let response = await axios.get(
      `https://v2.jokeapi.dev/joke/Any?type=single&amount=${state.jokesLimit}`
    )
    let data = response.data
    if (data.error) {
      alert('Sry, we have some troubles with API')
      return
    }
    await commit('setJokes', data.jokes)
  },
}
